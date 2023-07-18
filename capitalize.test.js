const capitalize = require('./capitalize.js')

test('lowercase string', () => {
  // Arrange
  const inputString = 'zilola';

  // Act
  const capitalizedString = capitalize(inputString);

  // Assert
  expect(capitalizedString).toBe('Zilola');
});

test('uppercase string', () => {
  // Arrange
  const inputString = 'ZILola';

  // Act
  const capitalizedString = capitalize(inputString);

  // Assert
  expect(capitalizedString).toBe('ZILola');
});

test('string starting with integer', () => {
  // Arrange
  const inputString = '1zilola';

  // Act
  const capitalizedString = capitalize(inputString);

  // Assert
  expect(capitalizedString).toBe('1zilola');
});

test('integer input', () => {
  // Arrange
  const inputString = '53';

  // Act
  const capitalizedString = capitalize(inputString);

  // Assert
  expect(capitalizedString).toBe('53');
});