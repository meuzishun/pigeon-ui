import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const ArrayContext = createContext();

function ArrayProvider({ children }) {
  const [array, setArray] = useState([]);

  const addItem = (item) => setArray((prev) => [...prev, item]);
  const removeItem = (index) =>
    setArray((prev) => prev.filter((_, i) => i !== index));
  const clearArray = () => setArray([]);

  return (
    <ArrayContext.Provider value={{ array, addItem, removeItem, clearArray }}>
      {children}
    </ArrayContext.Provider>
  );
}

ArrayProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export { ArrayContext, ArrayProvider };
