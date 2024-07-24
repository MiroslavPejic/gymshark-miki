// __tests__/calculations.test.js
const calculatePacks = require('../calculations');

describe('calculatePacks', () => {
  test('should correctly calculate packs for 1 item', () => {
    const result = calculatePacks(1);
    expect(result).toEqual({ 250: 1 });
  });

  test('should correctly calculate packs for 250 items', () => {
    const result = calculatePacks(250);
    expect(result).toEqual({ 250: 1 });
  });

  test('should return empty object for 251 items', () => {
    const result = calculatePacks(251);
    expect(result).toEqual({ 500: 1 });
  });

  test('should correctly calculate packs for 501 items', () => {
    const result = calculatePacks(501);
    expect(result).toEqual({ 500: 1, 250: 1 });
  });

  test('should correctly calculate packs for 12001 items', () => {
    const result = calculatePacks(12001);
    expect(result).toEqual({ 5000: 2, 2000: 1, 250: 1 });
  });
});