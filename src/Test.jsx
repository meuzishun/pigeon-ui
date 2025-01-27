import useAuth from './hooks/useAuth';
import useRooms from './hooks/useRooms';
import { useEffect } from 'react';

const Test = () => {
  const { user } = useAuth();
  const { data: rooms, addItem: addRoom } = useRooms();

  console.table(user);
  useEffect(() => {
    addRoom({ data: { name: 'Test Room' } });
  }, []);
  console.table(rooms);

  return null;
};

export default Test;
