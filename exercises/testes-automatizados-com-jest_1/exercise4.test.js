const { TestScheduler } = require('@jest/core');
const myFizzBuzz = require('./exercise4');

describe('testando divisões por 3 e 5', () => {

    test('15 divisível por 3 e 5', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    });
    
    test('6 divisível por 3', () => {
        expect(myFizzBuzz(6)).toEqual('fizz');
    });
    
    test('10 divisível por 5', () => {
        expect(myFizzBuzz(10)).toEqual('buzz');
    });
    
    test('13 não divisível por 3 nem 5', () => {
        expect(myFizzBuzz(13)).toEqual(13);
    });
    
    test('"oi" não é divisível', () => {
        expect(myFizzBuzz('oi')).toBe(false);
    });

});


