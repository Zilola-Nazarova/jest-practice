const stringLength = (string) => {
  const stringLength = string.split('').length;
  if (stringLength < 11 && stringLength > 0) {
    return stringLength;
  }
  throw new Error('The string length is less than 1 or greater than 10');
};

const reverseString = (string) => string.split('').reverse().join('');

module.exports = { stringLength, reverseString };