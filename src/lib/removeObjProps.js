export const removeObjProps = (obj, props) => {
  if (!Array.isArray(props)) {
    throw new Error('props must be array');
  }

  return Object.keys(obj).reduce((acc, key) => {
    if (!props.includes(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};
