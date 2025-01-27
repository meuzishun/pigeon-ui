import { useContext } from 'react';
import { DashboardContext } from '../contexts/DashboardContext';

function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error('DashboardContext not found');
  }

  return context;
}

export default useDashboard;
