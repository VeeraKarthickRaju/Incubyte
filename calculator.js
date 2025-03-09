function add(numbers) {
  // If the input string is empty, return 0
  if (numbers === "") {
    return 0;
  }
  
  // Split the string by commas, convert the split values to numbers, and sum them
  return numbers
    .split(',')
    .map(Number) // Convert each string to a number
    .reduce((sum, num) => sum + num, 0); // Sum up all the numbers
}
