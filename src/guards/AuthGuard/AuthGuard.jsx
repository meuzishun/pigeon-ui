import useAuth from '../../hooks/useAuth';
import { FriendsProvider } from '../../contexts/FriendsContext';
import { MessagesProvider } from '../../contexts/MessagesContext';
import { DashboardProvider } from '../../contexts/DashboardContext';
import { NewMessageProvider } from '../../contexts/NewMessageContext';
import { Navigate, Outlet } from 'react-router-dom';

function AuthGuard() {
  const { isInitialized, isAuthenticated } = useAuth();

  if (isInitialized && !isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <MessagesProvider>
        <DashboardProvider>
          <FriendsProvider>
            <NewMessageProvider>
              <Outlet />
            </NewMessageProvider>
          </FriendsProvider>
        </DashboardProvider>
      </MessagesProvider>
    </>
  );
}

export default AuthGuard;
