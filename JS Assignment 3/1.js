// Create an array of states in India.
// Remove all the names starting with vowels from the list. Use array.filter.

let states_in_India = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

console.log(states_in_India.length);
let new_states_in_India = states_in_India.filter((state) => {
  switch (state.charAt(0)) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
      break;
    default:
      return state;
  }
});

console.log(new_states_in_India.length);
