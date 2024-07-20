// Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let string = "SouravRoutrayAtHasedBitInnovations";
let vowel_count = 0;
let consonant_count = 0;

for (let i = 0; i < string.length; i++) {
  switch (string[i]) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      vowel_count++;
      break;

    default:
      consonant_count++;
      break;
  }
}

console.log("String: " + string);
console.log("Letters: " + string.length);
console.log("Vowels: " + vowel_count);
console.log("Consonants: " + consonant_count);
