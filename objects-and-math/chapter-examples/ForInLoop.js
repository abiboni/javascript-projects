let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};
for (item in tortoiseOne) {
console.log(item + ": " + tortoiseOne[item]);
}
// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.
