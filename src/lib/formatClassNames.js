export const formatClassNames = (styles, classNames) => {
  if (typeof classNames === 'string') {
    return styles[classNames];
  }

  if (Array.isArray(classNames)) {
    return classNames.map((className) => styles[className]).join(' ');
  }

  return null;
};
