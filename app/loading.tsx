"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 360,
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        <Loader2
          className="h-16 w-16 text-primary animate-spin"
          strokeWidth={2.5}
        />
      </motion.div>
    </div>
  );
}
