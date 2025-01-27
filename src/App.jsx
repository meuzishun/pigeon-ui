import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { LoadingModalProvider } from './contexts/LoadingModalContext';
import { AuthProvider } from './contexts/AuthContext';
import LoadingModal from './components/LoadingModal/LoadingModal';
import AutoLogin from './AutoLogin';

const router = createBrowserRouter(routes, { basename: '/pigeon-ui' });

function App() {
  return (
    <LoadingModalProvider>
      <AuthProvider>
        <AutoLogin creds={{ email: 'andrew@email.com', password: '12345678' }}>
          <LoadingModal />
          <RouterProvider router={router} />
        </AutoLogin>
      </AuthProvider>
    </LoadingModalProvider>
  );
}

export default App;
