const Calculator = require('./calculator.js');

describe('add method', () => {
  test('two non-zero numbers', () => {
    // Arrange
    const argumetns = new Calculator(7, 3);

    // Act
    const result = argumetns.add();

    // Assert
    expect(result).toBe(10);
  });

  test('one zero, one non-zero number', () => {
    // Arrange
    const argumetns = new Calculator(0, 22);

    // Act
    const result = argumetns.add();

    // Assert
    expect(result).toBe(22);
  });

  test('one negative, one positive number', () => {
    // Arrange
    const argumetns = new Calculator(-8, 5);

    // Act
    const result = argumetns.add();

    // Assert
    expect(result).toBe(-3);
  });

  test('two negative numbers', () => {
    // Arrange
    const argumetns = new Calculator(-5, -11);

    // Act
    const result = argumetns.add();

    // Assert
    expect(result).toBe(-16);
  });

  test('two zeros', () => {
    // Arrange
    const argumetns = new Calculator(0, 0);

    // Act
    const result = argumetns.add();

    // Assert
    expect(result).toBe(0);
  });
});

describe('substract method', () => {
  test('two non-zero numbers', () => {
    // Arrange
    const argumetns = new Calculator(7, 3);

    // Act
    const result = argumetns.subtract();

    // Assert
    expect(result).toBe(4);
  });

  test('one zero, one non-zero number', () => {
    // Arrange
    const argumetns = new Calculator(0, 22);

    // Act
    const result = argumetns.subtract();

    // Assert
    expect(result).toBe(-22);
  });

  test('one negative, one positive number', () => {
    // Arrange
    const argumetns = new Calculator(-8, 5);

    // Act
    const result = argumetns.subtract();

    // Assert
    expect(result).toBe(-13);
  });

  test('two negative numbers', () => {
    // Arrange
    const argumetns = new Calculator(-5, -11);

    // Act
    const result = argumetns.subtract();

    // Assert
    expect(result).toBe(6);
  });

  test('two zeros', () => {
    // Arrange
    const argumetns = new Calculator(0, 0);

    // Act
    const result = argumetns.subtract();

    // Assert
    expect(result).toBe(0);
  });
});

describe('multiply method', () => {
  test('two non-zero numbers', () => {
    // Arrange
    const argumetns = new Calculator(7, 3);

    // Act
    const result = argumetns.multiply();

    // Assert
    expect(result).toBe(21);
  });

  test('one zero, one non-zero number', () => {
    // Arrange
    const argumetns = new Calculator(0, 22);

    // Act
    const result = argumetns.multiply();

    // Assert
    expect(result).toBe(0);
  });

  test('one negative, one positive number', () => {
    // Arrange
    const argumetns = new Calculator(-8, 5);

    // Act
    const result = argumetns.multiply();

    // Assert
    expect(result).toBe(-40);
  });

  test('two negative numbers', () => {
    // Arrange
    const argumetns = new Calculator(-5, -11);

    // Act
    const result = argumetns.multiply();

    // Assert
    expect(result).toBe(55);
  });

  test('two zeros', () => {
    // Arrange
    const argumetns = new Calculator(0, 0);

    // Act
    const result = argumetns.multiply();

    // Assert
    expect(result).toBe(0);
  });
});

describe('divide method', () => {
  test('two non-zero numbers', () => {
    // Arrange
    const argumetns = new Calculator(12, 3);

    // Act
    const result = argumetns.divide();

    // Assert
    expect(result).toBe(4);
  });

  test('one zero, one non-zero number', () => {
    // Arrange
    const argumetns = new Calculator(0, 22);

    // Act
    const result = argumetns.divide();

    // Assert
    expect(result).toBe(0);
  });

  test('one negative, one positive number', () => {
    // Arrange
    const argumetns = new Calculator(-8, 5);

    // Act
    const result = argumetns.divide();

    // Assert
    expect(result).toBe(-1.6);
  });

  test('two negative numbers', () => {
    // Arrange
    const argumetns = new Calculator(-55, -11);

    // Act
    const result = argumetns.divide();

    // Assert
    expect(result).toBe(5);
  });

  test('two zeros', () => {
    // Arrange
    const argumetns = new Calculator(0, 0);

    // Act
    const result = argumetns.divide();

    // Assert
    expect(result).toBe(NaN);
  });
});