import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx';
import Repos from './routes/Repos.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./routes/Home";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/repos/:username",
        element: <Repos/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
