const { obj1 } = require('./exercise5');
const { obj2 } = require('./exercise5');
const { obj3 } = require('./exercise5');

test('obj1 diferente de obj2', () => {
    expect(obj1).toEqual(obj2);
});