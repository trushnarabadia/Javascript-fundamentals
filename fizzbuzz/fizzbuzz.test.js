const fizzBuzz = require('./fizzbuzz.js');

describe('fizzBuzz', () => {
  test('returns "FizzBuzz" if the number is divisible by 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz'); 
  } ) 

  test('returns "Fizz" if the number is divisible by 3 and not 5', () => {
    expect(fizzBuzz(3)).toBe('Fizz'); 
  } ) 

  test('returns "Buzz" if the number is divisible by 5 and not 3', () => {
    expect(fizzBuzz(5)).toBe('Buzz'); 
  } ) 

  test('returns the number if it is not divisible by 3 and 5', () => {
    expect(fizzBuzz(2)).toBe(2); 
  } ) 

})






