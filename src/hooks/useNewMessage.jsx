import { useContext } from 'react';
import { NewMessageContext } from '../contexts/NewMessageContext';

function useNewMessage() {
  const context = useContext(NewMessageContext);

  if (!context) {
    throw new Error('NewMessageContext not found');
  }

  return context;
}

export default useNewMessage;
