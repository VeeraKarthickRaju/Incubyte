const { add } = require('./calculator');  // Import the add function from calculator.js

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return the number itself for a single number string', () => {
  expect(add("1")).toBe(1);
});

test('should return the sum of two numbers', () => {
  expect(add("1,5")).toBe(6);
});

test('should return the sum of multiple numbers', () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

test('should handle larger numbers correctly', () => {
  expect(add("100,200,300")).toBe(600);
});

test('should return 0 when there are no numbers', () => {
  expect(add("0,0,0")).toBe(0);
});
