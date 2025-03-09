// Add method to handle any amount of numbers
function add(numbers) {
  // If the string is empty, return 0
  if (numbers === "") {
    return 0;
  }

  // Regex to match all numbers in the string (including negative numbers)
  const numArray = numbers.match(/-?\d+/g);

  // If no numbers are found, return 0
  if (!numArray) {
    return 0;
  }

  // Filter out negative numbers and store them
  const negativeNumbers = numArray.filter(num => num < 0);

  // If there are negative numbers, throw an exception with them
  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
  }

  // Convert the array of numbers (strings) to an array of integers and sum them up
  return numArray
    .map(Number)  // Convert all elements to numbers
    .reduce((sum, num) => sum + num, 0);  // Sum them up
}

module.exports = { add };  // Export the add function for use in tests

