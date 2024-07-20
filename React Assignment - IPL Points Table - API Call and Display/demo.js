const array = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

array.sort((a, b) => a.age - b.age);

console.log(array);
