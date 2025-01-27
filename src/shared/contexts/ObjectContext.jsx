import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const ObjectContext = createContext();

function ObjectProvider({ children }) {
  const [object, setObject] = useState({});

  const updateObject = (key, value) =>
    setObject((prevObject) => ({
      ...prevObject,
      [key]: value,
    }));

  const removeObjectKey = (key) =>
    setObject((prevObject) => {
      const { [key]: _, ...rest } = prevObject;
      return rest;
    });

  const clearObject = () => setObject({});

  return (
    <ObjectContext.Provider
      value={{ object, updateObject, removeObjectKey, clearObject }}
    >
      {children}
    </ObjectContext.Provider>
  );
}

ObjectProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export { ObjectContext, ObjectProvider };
