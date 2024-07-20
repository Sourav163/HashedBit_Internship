// Write a function to reverse a string.
// Input - Hello
// Output - olleH

function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("Hello"));
