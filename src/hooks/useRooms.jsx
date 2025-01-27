import { useContext } from 'react';
import { RoomsContext } from '../contexts/RoomsContext';

const useRooms = () => {
  const context = useContext(RoomsContext);
  if (!context) {
    throw new Error('useRooms must be used within a RoomsProvider');
  }
  return context;
};

export default useRooms;
