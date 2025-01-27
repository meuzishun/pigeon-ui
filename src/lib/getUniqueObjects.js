export const getUniqueObjects = (arr, key = undefined) => {
  if (key === undefined) {
    return Array.from(new Set(arr));
  } else {
    const seen = new Set();
    return arr.filter((obj) => {
      const identifier = obj[key];
      if (!seen.has(identifier)) {
        seen.add(identifier);
        return true;
      }
      return false;
    });
  }
};
