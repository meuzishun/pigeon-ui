export const convertCamelcaseToSent = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Argument must be string');
  }

  const chars = str.split('');
  const charsWithSpaces = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i].toUpperCase()) {
      charsWithSpaces.push(' ');
    }
    charsWithSpaces.push(chars[i].toLowerCase());
  }
  return charsWithSpaces.join('');
};
