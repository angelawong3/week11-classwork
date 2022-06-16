// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function (num) {
  // use math.sqrt; and return only number, not decimal
  // const squareRoot = Math.sqrt(num);
  // return squareRoot % 1 === 0;

  // without using math.sqrt
  let result;
  for (let i = 0; i <= num; i++) {
    result = i * i;
    if (result === num) {
      return true;
    }
  }
  return false;
};
