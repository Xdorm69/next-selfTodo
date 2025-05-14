"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CardComp from "./CardComp";
import TotalTodoCard from "./TotalTodoCard";
import AnimatedImage from "./AnimatedImage";
import { cn } from "@/lib/utils";

const TodozTopBar = () => {
  const [imgClicked, setImgClicked] = useState<boolean>(false);
  const [topHovered, setTopHovered] = useState<boolean>(false);

  return (
    <motion.div
      layout
      className={cn(
        "w-full grid grid-cols-4 auto-rows-auto gap-4 relative overflow-hidden",
        imgClicked && "max-h-[600px]"
      )}
    >
      <motion.div
      onMouseEnter={() => setTopHovered(true)}
      onMouseLeave={() => setTopHovered(false)}
      animate={imgClicked && topHovered ? {height: "140%"} : {height: "100%"}}
        layout
        className={cn(
          "col-span-1 w-full h-full",
          imgClicked && "col-span-1 row-start-1"
        )}
      >
        <TotalTodoCard />
      </motion.div>

      <motion.div
        layout        
        className={cn(
          "col-span-1 w-full",
          imgClicked && "col-span-1 row-start-2"
        )}
      >
        <CardComp isHovered={topHovered} imgClicked={imgClicked} />
      </motion.div>

      <motion.div
        layout
        className={cn(
          "w-full bg-card rounded-lg shadow-lg overflow-hidden duration-300",
          imgClicked
            ? "col-span-3 row-span-2 h-[600px]"
            : "col-span-2 h-[330px]"
        )}
      >
        <AnimatedImage value={imgClicked} setValue={setImgClicked} />
      </motion.div>
    </motion.div>
  );
};

export default TodozTopBar;
