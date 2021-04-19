const sum = require('./exercise1');

test('sum 4 + 5 = 9', () => {
  expect(sum(4,5)).toBe(9);
});