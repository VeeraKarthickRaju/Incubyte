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

// Test with newlines
test('should handle newlines as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);  // 1 + 2 + 3 = 6
  expect(add("1\n2\n3")).toBe(6);  // 1 + 2 + 3 = 6
});

// Test with custom delimiter
test('should handle custom delimiter (semicolon)', () => {
  expect(add("//;\n1;2;3")).toBe(6);  // 1 + 2 + 3 = 6
});

test('should handle custom delimiter (dash)', () => {
  expect(add("//-\n1-2-3")).toBe(6);  // 1 + 2 + 3 = 6
});

test('should handle custom delimiter and default delimiters mixed', () => {
  expect(add("//;\n1;2,3\n4")).toBe(10);  // 1 + 2 + 3 + 4 = 10
});

// Test for negative numbers (should throw error)
test('should throw an error for negative numbers', () => {
  expect(() => add("1,2,-3,4")).toThrow("Negatives not allowed: -3");
});

test('should throw an error for multiple negative numbers', () => {
  expect(() => add("1,-2,-3,-4")).toThrow("Negatives not allowed: -2, -3, -4");
});

test('should throw an error for negative numbers with custom delimiter', () => {
  expect(() => add("//;\n1;-2;-3")).toThrow("Negatives not allowed: -2, -3");
});
