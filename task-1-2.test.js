const { stringLength, reverseString } = require('./task-1-2.js');

test('Two strings with space, count characters', () => {
  // Arrange
  const stringExample = 'Some sring';

  // Act
  const charactersCount = stringLength(stringExample);

  // Assert
  expect(charactersCount).toBe(10);
});

test('One string without spaces, count characters', () => {
  // Arrange
  const stringExample = 'mystring';

  // Act
  const charactersCount = stringLength(stringExample);

  // Assert
  expect(charactersCount).toBe(8);
});

test('String length greater than 10, count characters', () => {
  // Arrange
  const stringExample = 'myslonglongtring';

  // Act

  // Assert
  expect(() => stringLength(stringExample)).toThrow(Error);
});

test('Reverse a string', () => {
  // Arrange
  const stringExample = 'myName';

  // Act
  const reversedString = reverseString(stringExample);

  // Assert
  expect(reversedString).toBe('emaNym');
});