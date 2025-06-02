import React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
// components
import Rectangle from "./Rectangle";

const RectangleTransition = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
            <Rectangle />
          </div>
          {children}
        </div>
      </AnimatePresence>
    </>
  );
};

export default RectangleTransition;
