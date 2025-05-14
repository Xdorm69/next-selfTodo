"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function LoaderAnim({ showLoader }: { showLoader: boolean }) {
  const [visible, setVisible] = useState(showLoader);

  useEffect(() => {
    if (!showLoader) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 500); // delay to allow exit animation to finish

      return () => clearTimeout(timer);
    } else {
      setVisible(true);
    }
  }, [showLoader]);

  const animVars: Variants = {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    animate: (index: number) => ({
      opacity: [0, 1, 0],
      y: [100, 0, -100],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        delay: index * 0.2,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            scale: 1.5,
            y: -1000,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <motion.div
            className="inset-0 bg-pink-600"
            exit={{
              scale: 1.5,
              y: -1000,
              transition: { duration: 0.5, delay:0.2, ease: "easeInOut" },
            }}
          />
          <motion.div
            style={{ fontFamily: "var(--font-barlow)" }}
            className="text-[10vw] md:text-[12vw] lg:text-[15rem] tracking-tighter uppercase font-bold text-center"
          >
            <div className="flex justify-center gap-4">
              {"Zodos".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={animVars}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  className="inline-block will-change-transform"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
