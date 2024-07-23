const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/calculate-pack-sizes", async (req, res) => {
  const { numOrdered } = req.body;

  const resData = {
    numOrdered: numOrdered
  }

  return res.json({ status: 200, data: resData })
});

app.get("/get-orders", async (req, res) => {

  return res.json({ status: response.status, data: response.data })
});

app.listen(3001);