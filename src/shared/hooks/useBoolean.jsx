import { useContext } from 'react';
import { BooleanContext } from '../contexts/BooleanContext';

function useBoolean() {
  const context = useContext(BooleanContext);

  if (!context) {
    throw new Error('BooleanContext not found');
  }

  return context;
}

export { useBoolean };
