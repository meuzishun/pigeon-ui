export const convertListToString = (arr) => {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str = str.concat(arr[i]);
    } else if (i === arr.length - 2) {
      str = str.concat(arr[i], ' & ');
    } else {
      str = str.concat(arr[i], ', ');
    }
  }

  return str;
};
