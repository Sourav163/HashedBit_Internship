let arr = [
  {
    id: 1,
    name: "Sourav",
  },
  {
    id: 2,
    name: "Ankita",
  },
  {
    id: 3,
    name: "Hello",
  },
];
let newarr = arr.filter((item) => {
  if (item.id > 1) {
    item.id += 10;
  }
});
console.log(arr);
console.log(newarr);
