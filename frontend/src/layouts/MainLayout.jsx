import React from 'react';
import { Outlet, useLocation } from 'react-router';
// components
import MainNav from '@/components/MainNav';
import PageTransition from '@/components/transitions/PageTransition';
import Gradient from '@/components/Gradient';
import RectangleTransition from '@/components/transitions/RectangleTransition';
import Header from '@/components/Header';

const MainLayout = () => {
  const location = useLocation();
  return (
    <PageTransition location={location}>
      <div className="flex">
        <MainNav />
        <div className="min-h-[calc(100vh_-_93.5px)] w-full max-w-[1130px] mx-auto px-[15px]">
          <Header />
          <Outlet />
          {/* <Gradient /> */}
          <Gradient />
          {/* <RectangleTransition /> */}
          <RectangleTransition />
        </div>
      </div>
    </PageTransition>
  );
};

export default MainLayout;
