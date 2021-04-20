const myRemove = require('./exercise2');

describe('check the removal items in array', () => {

    test('array equal [1, 2, 3]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    
    test('remove 3 from the [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
    });
    
    test('array not equal original array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    
    test('remove 5 from the [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });

});

