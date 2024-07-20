// Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repeatedSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
    if (n == 0 && Math.floor(sum / 10) != 0) {
      n = sum;
      sum = 0;
    }
  }
  return sum;
}

console.log(repeatedSum(456));
