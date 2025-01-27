import { createRef } from 'react';
import RootLayout from './layouts/RootLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import FriendsPage from './pages/FriendsPage';
import UserSearchPage from './pages/UserSearchPage';
import LogoutPage from './pages/LogoutPage';
import AuthGuard from './guards/AuthGuard/AuthGuard';
import GuestGuard from './guards/GuestGuard/GuestGuard';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    nodeRef: createRef(),
    children: [
      {
        path: '/',
        element: <GuestGuard />,
        nodeRef: createRef(),
        children: [
          {
            index: '/',
            element: <WelcomePage />,
            nodeRef: createRef(),
          },
          {
            path: 'register',
            element: <RegisterPage />,
            nodeRef: createRef(),
          },
          {
            path: 'login',
            element: <LoginPage />,
            nodeRef: createRef(),
          },
        ],
      },
      {
        path: '/',
        element: <AuthGuard />,
        nodeRef: createRef(),
        children: [
          {
            path: 'messages',
            element: <MessagesPage />,
            nodeRef: createRef(),
          },
          {
            path: 'profile',
            element: <ProfilePage />,
            nodeRef: createRef(),
          },
          {
            path: 'friends',
            element: <FriendsPage />,
            nodeRef: createRef(),
          },
          {
            path: 'search',
            element: <UserSearchPage />,
            nodeRef: createRef(),
          },
          {
            path: 'logout',
            element: <LogoutPage />,
            nodeRef: createRef(),
          },
        ],
      },
    ],
  },
];
