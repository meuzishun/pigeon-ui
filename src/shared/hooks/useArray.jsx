import { useContext } from 'react';
import { ArrayContext } from '../contexts/ArrayContext';

function useArray() {
  const context = useContext(ArrayContext);

  if (!context) {
    throw new Error('ArrayContext not found');
  }

  return context;
}

export { useArray };
