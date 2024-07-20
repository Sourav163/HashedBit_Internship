// Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
  return paragraph.split(" ").length;
}

let paragraph =
  "The aroma of freshly baked bread filled the kitchen, a symphony of yeasty warmth and caramelized sugar. Sunlight streamed through the window, casting a golden glow on the counter where flour dusted the air like a gentle snowfall. Anticipation bubbled over as I carefully placed the golden brown loaf on a cooling rack, the crust begging to be broken. The reward for hours of kneading and rising was finally within reach, promising a slice of pure comfort and satisfaction.";

console.log(countWords(paragraph));
