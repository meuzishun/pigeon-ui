import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { LoadingModalProvider } from './contexts/LoadingModalContext';
import { AuthProvider } from './contexts/AuthContext';
import LoadingModal from './components/LoadingModal/LoadingModal';

const router = createBrowserRouter(routes, { basename: '/pigeon-ui' });

function App() {
  return (
    <LoadingModalProvider>
      <AuthProvider>
        <LoadingModal />
        <RouterProvider router={router} />
      </AuthProvider>
    </LoadingModalProvider>
  );
}

export default App;
