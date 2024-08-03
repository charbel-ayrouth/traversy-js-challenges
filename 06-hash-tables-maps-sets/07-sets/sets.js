const nameSet = new Set(["John", "Jane", "Joe"]);

console.log(nameSet);

// Add to set
nameSet.add("Jack");
nameSet.add("Jill");

console.log(nameSet);

// Check for values
console.log(nameSet.has("Jack"));
console.log(nameSet.has("Brad"));

// Get size
console.log(nameSet.size);

// Get values
console.log(nameSet.values());

for (const name of nameSet) {
  console.log(name);
}

// Convert to array
const nameArray = [...nameSet];
console.log(nameArray);

// Clear set
nameSet.clear();

console.log(nameSet.size);
