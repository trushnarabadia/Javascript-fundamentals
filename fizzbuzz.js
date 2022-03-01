// def fizzbuzz(number)
//   return "FizzBuzz" if (number % 15 == 0)
//   return "Fizz" if number % 5 == 0
//   return "Buzz" if number % 3 == 0
//   number
// end

// for (let step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log('Walking east one step');
// }

function fizzbuzz(number) {
  if (number % 15 == 0){
     return 'FizzBuzz'; 
} else if (number % 5 == 0) {
  return 'Fizz';
}else{
  return 'Buzz';
}
}

// for (let num = 1; num < 16; num++) {
//   const result = fizzbuzz(num);
//   console.log('Fizzbuzz result for ' + num + ' is ' + result);
// }

for (let num = 1 ; num <= 50 ; num++) {
  console.log(`Fizzbuzz result for ${num} is ${fizzbuzz(num)}`) 
}