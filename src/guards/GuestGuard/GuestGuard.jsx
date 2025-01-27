import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function GuestGuard() {
  const { isInitialized, isAuthenticated } = useAuth();

  if (isInitialized && isAuthenticated) {
    return <Navigate to='/messages' />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default GuestGuard;
