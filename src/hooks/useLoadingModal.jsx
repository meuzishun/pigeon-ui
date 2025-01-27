import { useContext } from 'react';
import { LoadingModalContext } from '../contexts/LoadingModalContext';

function useLoadingModal() {
  const context = useContext(LoadingModalContext);

  if (!context) {
    throw new Error('LoadingModalContext not found');
  }

  return context;
}

export default useLoadingModal;
