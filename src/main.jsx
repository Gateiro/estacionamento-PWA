import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // CSS Global

// 1. Importar o Roteador
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 2. Importar o Layout Raiz e as Páginas
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

// 3. Definir as Rotas
const router = createBrowserRouter([
  {
    path: '/', // Rota pai
    element: <App />, 
    children: [
      {
        index: true, 
        element: <Login />, 
      },
      {
        path: 'home', 
        element: <Home />, 
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