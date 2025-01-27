import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const BooleanContext = createContext(null);

function BooleanProvider({ children }) {
  const [boolean, setBoolean] = useState(false);

  const toggleBoolean = () => {
    setBoolean((prev) => !prev);
  };

  return (
    <BooleanContext.Provider value={{ boolean, toggleBoolean }}>
      {children}
    </BooleanContext.Provider>
  );
}

BooleanProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export { BooleanContext, BooleanProvider };
