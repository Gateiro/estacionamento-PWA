import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Login from './pages/Login.jsx'; 
import Home from './pages/Home.jsx';

import RotaProtegida from './components/RotaProtegida.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [

      {
        index: true,
        element: <Login />,
      },

      {
        element: <RotaProtegida />, 
        children: [

          {
            path: 'home',
            element: <Home />,
          },

        ]
      },

      {
        path: '*',
        element: <h1 className="text-center p-10">404 - Página Não Encontrada</h1>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
