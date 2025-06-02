import { createBrowserRouter } from 'react-router';
// layouts
import MainLayout from '@/layouts/MainLayout';
// pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Services from '@/pages/Services';
import MyWorks from '@/pages/MyWorks';
// components

export const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/works',
        element: <MyWorks />,
      },
    ],
  },
]);
