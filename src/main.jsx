// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import App from './pages/App/App.jsx';
import About from './pages/About/About.jsx';
import Logement from './pages/Logement/Logement.jsx';
import NotFound from './pages/404/404.jsx';

// CSS
import './assets/css/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/logement/:id',
    element: <Logement />,
  },
  {
    path: '/NotFound',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
