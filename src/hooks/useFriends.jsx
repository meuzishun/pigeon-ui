import { useContext } from 'react';
import { FriendsContext } from '../contexts/FriendsContext';

function useFriends() {
  const context = useContext(FriendsContext);

  if (!context) {
    throw new Error('FriendsContext not found');
  }

  return context;
}

export default useFriends;
