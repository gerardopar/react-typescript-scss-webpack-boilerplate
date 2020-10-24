const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(4, 3);
    expect(result).toBe(7);
});

test('should return a greeting', () => {
    const result = generateGreeting('Gerardo');
    expect(result).toBe('Hello Gerardo');
});

test('should return a greeting with no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
})