import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext not found');
  }

  return context;
}

export default useAuth;
