"use client";
import React from "react";
import { motion } from "framer-motion";
import CardComp from "./CardComp";
import TotalTodoCard from "./TotalTodoCard";
import Image from "next/image";

const TodozTopBar = () => {
  const baseAnimationProps = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const animationProps = [
    {
      ...baseAnimationProps,
      transition: { duration: 0.3, delay: 0.5 },
    },
    {
      ...baseAnimationProps,
      transition: { duration: 0.3, delay: 0.7 },
    },
    {
      ...baseAnimationProps,
      transition: { duration: 0.3, delay: 0.9 },
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <motion.div className="col-span-1" {...animationProps[2]}>
        <TotalTodoCard />
      </motion.div>

      <motion.div className="col-span-1" {...animationProps[1]}>
        <CardComp />
      </motion.div>

      <motion.div
        className="w-full h-[330px] md:col-span-2 lg:col-span-1 xl:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden"
        {...animationProps[0]}
      >
        <Image
          src={"/0.jpg"}
          alt="hero-img"
          width={1000}
          priority
          height={800}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default TodozTopBar;
