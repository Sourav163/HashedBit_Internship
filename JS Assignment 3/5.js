// Write a function to replace wrong word with correct word in any sentence.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(string, wrong, correct) {
  string = string.replace(wrong, correct);
  console.log(string);
}

correctfn("I love my India", "my", "My");
