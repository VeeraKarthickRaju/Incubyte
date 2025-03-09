// Add method to handle any amount of numbers
function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  return numbers
    .split(',')
    .map(Number)  // Convert each string to a number
    .reduce((sum, num) => sum + num, 0);  // Sum up all the numbers
}

// Export the add function to make it available for testing
module.exports = { add };
