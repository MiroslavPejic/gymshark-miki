package main

import (
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"log"
)

// calculatePacks calculates the pack sizes required for the given number of ordered items
func calculatePacks(itemsOrdered int) map[int]int {
	packSizes := []int{5000, 2000, 1000, 500, 250}
	remainingItems := itemsOrdered
	packs := make(map[int]int)

	// Try to use the largest packs first
	for i := 0; i < len(packSizes)-1; i++ {
		packSize := packSizes[i]
		if remainingItems >= packSize {
			numPacks := remainingItems / packSize
			if numPacks > 0 {
				packs[packSize] = numPacks
				remainingItems -= numPacks * packSize
			}
		}
	}

	// If there are still remaining items that are not covered
	if remainingItems > 0 {
		// Find the smallest pack that can cover the remaining items
		for i := len(packSizes) - 1; i >= 0; i-- {
			packSize := packSizes[i]
			if remainingItems <= packSize {
				packs[packSize] = packs[packSize] + 1
				break
			}
		}
	}

	return packs
}

// handleCalculatePackSizes handles POST requests to /calculate-pack-sizes
func handleCalculatePackSizes(w http.ResponseWriter, r *http.Request) {
	var requestBody struct {
		NumOrdered int `json:"numOrdered"`
	}
	
	if err := json.NewDecoder(r.Body).Decode(&requestBody); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	packs := calculatePacks(requestBody.NumOrdered)
	
	resData := struct {
		Packs map[int]int `json:"packs"`
	}{
		Packs: packs,
	}
	
	response := struct {
		Status int         `json:"status"`
		Data   interface{} `json:"data"`
	}{
		Status: http.StatusOK,
		Data:   resData,
	}
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

// handleGetOrders handles GET requests to /get-orders
func handleGetOrders(w http.ResponseWriter, r *http.Request) {
	// Simulating a response as there is no actual axios call in this example
	response := struct {
		Status int         `json:"status"`
		Data   interface{} `json:"data"`
	}{
		Status: http.StatusOK,
		Data:   "Simulated response data", // Replace with actual response data if needed
	}
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/calculate-pack-sizes", handleCalculatePackSizes).Methods(http.MethodPost)
	r.HandleFunc("/get-orders", handleGetOrders).Methods(http.MethodGet)
	
	handler := cors.Default().Handler(r)
	
	log.Println("Server is listening on port 3002")
	if err := http.ListenAndServe(":3002", handler); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
}