import { sum } from "./sum";

test('Sum of two numbers', () => {
    const result = sum(4, 6);
    expect(result).toBe(1);
});