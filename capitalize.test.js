const capitalize = require('./capitalize.js')

test('lowercase string', () => {
  // Arrange
  const inputString = 'zilola';

  // Act
  const capitalizedString = capitalize(inputString);

  // Assert
  expect(capitalizedString).toBe('Zilola');
});