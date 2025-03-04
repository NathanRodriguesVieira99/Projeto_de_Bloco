import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global/global.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
