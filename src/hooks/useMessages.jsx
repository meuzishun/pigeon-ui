import { useContext } from 'react';
import { MessagesContext } from '../contexts/MessagesContext';

function useMessages() {
  const context = useContext(MessagesContext);

  if (!context) {
    throw new Error('MessagesContext not found');
  }

  return context;
}

export default useMessages;
