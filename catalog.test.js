const assert = require('assert');
const { applyFilters, applySort, sanitizePriceRange } = require('./catalog');

const products = [
  { name: 'Chocolate Cake', price: 500, rating: 4.8, eggless: true, flavour: 'Chocolate', occasion: 'Birthday', type: 'Cake' },
  { name: 'Pineapple Cake', price: 900, rating: 4.1, eggless: false, flavour: 'Pineapple', occasion: 'Anniversary', type: 'Cake' },
  { name: 'Chocolate Combo', price: 1500, rating: 4.9, eggless: true, flavour: 'Chocolate', occasion: 'Anniversary', type: 'Combo' }
];

const state = {
  minPrice: 200,
  maxPrice: 1000,
  egglessOnly: true,
  search: 'chocolate',
  occasion: new Set(),
  flavour: new Set(['Chocolate']),
  type: new Set(['Cake'])
};

const filtered = applyFilters(products, state);
assert.strictEqual(filtered.length, 1);
assert.strictEqual(filtered[0].name, 'Chocolate Cake');

const sortedLow = applySort(products, 'low');
assert.strictEqual(sortedLow[0].price, 500);

const sortedHigh = applySort(products, 'high');
assert.strictEqual(sortedHigh[0].price, 1500);

const sortedRating = applySort(products, 'rating');
assert.strictEqual(sortedRating[0].rating, 4.9);

const sanitized = sanitizePriceRange(-10, 5000);
assert.deepStrictEqual(sanitized, { min: 200, max: 3500 });

console.log('catalog.test.js passed');
