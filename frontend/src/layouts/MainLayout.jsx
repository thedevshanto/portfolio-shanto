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
    <>
      {/* <Gradient /> */}
      <Gradient />
      {/* <RectangleTransition /> */}
      <RectangleTransition />
      <PageTransition location={location}>
        <div className="flex">
          <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
            <MainNav />
          </div>
          <div className="w-full max-w-[1130px] mx-auto px-[15px]">
            <Header />
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default MainLayout;
