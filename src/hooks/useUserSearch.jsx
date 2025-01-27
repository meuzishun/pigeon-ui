import { useContext } from 'react';
import { UserSearchContext } from '../contexts/UserSearchContext';

function useUserSearch() {
  const context = useContext(UserSearchContext);

  if (!context) {
    throw new Error('UserSearchContext not found');
  }

  return context;
}

export default useUserSearch;
