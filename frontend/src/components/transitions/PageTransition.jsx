import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  const MotionElem = motion.div;

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <MotionElem
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="min-h-screen w-screen fixed top-0 left-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
