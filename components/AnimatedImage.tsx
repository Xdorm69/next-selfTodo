"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CrossIcon, HandIcon } from "lucide-react";
import HoverDiv from "./HoverDiv";

const AnimatedImage = ({
  value,
  setValue,
}: {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    delay: 0,
    scale: 1,
    transformOrigin: "50% 50%",
  });
  const imgRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      if (imgRef.current) {
        const box = imgRef.current.getBoundingClientRect();
        const offsetX = ((e.clientX - box.left) / box.width) * 100;
        const offsetY = ((e.clientY - box.top) / box.height) * 100;

        setIsHovering(true);
        setMousePosition({
          x: 0,
          y: 0,
          delay: 0,
          scale: 1.5,
          transformOrigin: `${offsetX}% ${offsetY}%`,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (imgRef.current && isHovering) {
        const box = imgRef.current.getBoundingClientRect();
        const offsetX = ((e.clientX - box.left) / box.width) * 100;
        const offsetY = ((e.clientY - box.top) / box.height) * 100;

        setMousePosition((prev) => ({
          ...prev,
          transformOrigin: `${offsetX}% ${offsetY}%`,
        }));
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePosition((prev) => ({
        ...prev,
        delay: 0.0,
        scale: 1,
      }));
    };

    const currentRef = imgRef.current;
    if (currentRef) {
      currentRef.addEventListener("mouseenter", handleMouseEnter);
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        currentRef.removeEventListener("mouseenter", handleMouseEnter);
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isHovering]);

  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const imgName = Array.from({ length: 16 }).map((_, i) =>
    i === 2
      ? "/2.png"
      : i === 3
      ? "/3.webp"
      : i === 12
      ? `/${i}.webp`
      : i === 16
      ? "/16.jpeg"
      : `/${i}.jpg`
  );

  const folderName = "/gameImgs";
  const ImgArr = imgName.map((item) => folderName + item);

  const handleImageClick = () => {
    // First, trigger layout shift

    // Delay image change to happen after layout shift
    setCurrentImgIdx((prev) => (prev + 1) % imgName.length);
  };

  return (
    <div ref={imgRef} className="w-full h-full overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.img
          onClick={handleImageClick}
          key={currentImgIdx}
          src={ImgArr[currentImgIdx]}
          alt="hero-img"
          loading="lazy"
          width={1000}
          initial={{
            scale: 1,
            transformOrigin: mousePosition.transformOrigin,
            transition: { type: "tween", ease: "easeOut", duration: 0.3 },
          }}
          exit={{
            scale: 3,
            transition: { type: "tween", ease: "easeIn", duration: 0.3 },
          }}
          animate={{
            y: 0,
            scale: mousePosition.scale,
            transformOrigin: mousePosition.transformOrigin,
          }}
          transition={{
            type: "tween",
            duration: 0.38,
            ease: [0, 0.28, 0.8, 1.12],
            delay: mousePosition?.delay,
          }}
          height={800}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
        <HoverDiv
          value={value}
          currentImgIdx={currentImgIdx}
        />
      <AnimatePresence mode="wait">
        {!value ? (
          <motion.div
            exit={{ y: 100, opacity: 0 }}
            className="text-lg absolute bottom-10 left-10 flex gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.3, width: 100 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setValue(true)}
              className="text-white cursor-pointer relative flex gap-2 w-fit h-fit bg-black/30 p-2 rounded-full"
            >
              <h1 className="z-10">Click Me</h1>
              <motion.div
                initial={{ x: -50, y: 0 }}
                animate={{
                  x: [0, 100, 100, 0],
                  y: [0, 0, -50, -50, 0],
                  rotate: [-10, 10, -10],
                }}
                transition={{
                  duration: 2,
                  type: "tween",
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 -translate-y-1/2 right-2"
              >
                <HandIcon className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <div className="absolute top-5 right-5">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => setValue(false)}
              initial={{ opacity: 0, rotate: 30, y: -100 }}
              whileHover={{
                scale: 1.4,
                rotate: 315,
                backgroundColor: "black",
                borderRadius: "50%",
              }}
              exit={{ y: 100, opacity: 0 }}
              animate={{ opacity: 1, rotate: 45, y: 0 }}
            >
              <div className="p-2 rounded-full bg-black/40">
                <CrossIcon className="w-5 h-5" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedImage;
