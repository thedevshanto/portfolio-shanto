import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
// router
import { RouterProvider } from 'react-router';
import { Router } from './router/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
    <ToastContainer />
  </StrictMode>
);
