import add from './math'; // Import the add function

describe('add function', () => {
    test('adds two numbers correctly', () => {
        expect(add(1, 2)).toBe(3); // Test with positive numbers
    });

    test('adds negative numbers correctly', () => {
        expect(add(-1, -2)).toBe(-3); // Test with negative numbers
    });

    test('adds zero correctly', () => {
        expect(add(0, 5)).toBe(5); // Test with zero
    });

    test('works with floating point numbers', () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3); // Test with floating point numbers
    });
});