"use client";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.scss";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

interface TransitionProps {
  children: React.ReactNode;
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  const routes = {
    "/": "Index",
    "/about": "about",
    "/projects": "projects",
  };
  const router = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div className="inner">
        {/* <motion.div
          className="slide"
          initial={{
            y: "100vh",
          }}
          animate={{
            y: "100vh",
          }}
          exit={{
            y: 0,
            transition: {
              duration: 2,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        /> */}

        <motion.div
          className="page"
          initial={{
            scale: 1,
            y: 0,
          }}
          animate={{
            scale: 1,
            y: 0,
          }}
          exit={{
            scale: 0.9,
            y: -150,
            opacity: 0.5,
            transition: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 1,
            }}
          >
            {/* <div className="header">
              <div className="hidden lg:flex">
                <Header />
              </div>
            </div> */}
            {children}
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Transition;