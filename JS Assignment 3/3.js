// let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = "INDIA";

let string_array = string.split("");
string_array.splice(3);
string_array.push("ONESIA");

let op_string = string_array.join("");
console.log(op_string);
