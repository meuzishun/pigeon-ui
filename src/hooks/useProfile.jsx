import { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';

function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error('ProfileContext not found');
  }

  return context;
}

export default useProfile;
