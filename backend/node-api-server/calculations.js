const packSizes = [5000, 2000, 1000, 500, 250];

function calculatePacks(itemsOrdered) {
  let remainingItems = itemsOrdered;
  let packs = {};

  // Try to use the largest packs first
  for (let i = 0; i < packSizes.length - 1; i++) {
    let packSize = packSizes[i];

    if (remainingItems >= packSize) {
      let numPacks = Math.floor(remainingItems / packSize);

      if (numPacks > 0) {
        packs[packSize] = numPacks;
        remainingItems -= numPacks * packSize;
      }
    }
  }

  // If there are still remaining items that are not covered
  if (remainingItems > 0) {
    // Find the smallest pack that can cover the remaining items
    for (let i = packSizes.length - 1; i >= 0; i--) {
      let packSize = packSizes[i];
      if (remainingItems <= packSize) {
        packs[packSize] = (packs[packSize] || 0) + 1;
        break;
      }
    }
  }

  return packs;
}

module.exports = calculatePacks;