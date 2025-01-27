import { useContext } from 'react';
import { ObjectContext } from '../contexts/ObjectContext';

function useObject() {
  const context = useContext(ObjectContext);

  if (!context) {
    throw new Error('useObject must be used within an ObjectProvider');
  }

  return context;
}

export { useObject };
