import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/app/App.tsx';
import Work from './pages/work/Work.tsx';
import About from './pages/about/About.tsx';
import { routes } from './route.ts';

import '../i18n.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: routes.work, element: <Work /> },
      { path: routes.about, element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
