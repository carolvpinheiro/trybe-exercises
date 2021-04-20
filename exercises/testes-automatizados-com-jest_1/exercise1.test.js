const sum = require('./exercise1');

describe('suns two values', () => {

  test('sum 4 + 5 = 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  test('sum 0 + 0 = 0', () => {
    expect(sum(0,0)).toEqual(0);
  });

  test('erro', () => {
    new Error('parameters must be numbers');
  });

  test('erro sum 4 + "5" = 9', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });

});
