// Add method to handle any amount of numbers
function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  // Split the string by either commas or newlines
  return numbers
    .split(/[\n,]/)  // Regular expression to split by comma or newline
    .map(Number)     // Convert each item in the array to a number
    .reduce((sum, num) => sum + num, 0);  // Sum up all the numbers
}

module.exports = { add };  // Export the add function for use in tests
