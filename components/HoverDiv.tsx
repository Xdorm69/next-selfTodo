import { GAME_TEXT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const HoverDiv = ({
  currentImgIdx,
  value,
}: {
  currentImgIdx: number;
  value: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const truncateText = (text: string, maxLength: number = 100) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  const animationProp = {
    start: {
      opacity: 0,
      y: 20,
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImgIdx}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ x: 10, y: -10 }}
        animate={{ y: 10, opacity: 1 }}
        exit={{ opacity: 0, y: 20 }}
        whileHover={{ width: "100%", height: "100%", x: 0, y: 0 }}
        className={cn(
          "absolute z-50 top-0 left-0 bg-opacity-60 rounded-2xl",
          "w-16 h-16",
          GAME_TEXT[currentImgIdx].bg
            ? GAME_TEXT[currentImgIdx].bg
            : "bg-green-500"
        )}
      >
        <AnimatePresence mode="wait">
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute p-3 w-full h-full top-0 left-0 rounded-2xl overflow-hidden"
              )}
            >
              <div className="w-full h-full flex justify-between">
                {/* LEFT PART  */}
                <div className={cn("w-2/3", hovered && "w-1/2")}>
                  {/* TITLE ANIMATION  */}
                  <div
                    className={cn(
                      "flex gap-2 mb-2 items-center",
                      value ? "text-4xl" : "text-2xl"
                    )}
                  >
                    {GAME_TEXT[currentImgIdx].title
                      ?.split(" ")
                      .slice(0, value ? 5 : 3)
                      .map((word, id) => (
                        <motion.div
                          key={word}
                          className="font-semibold"
                          variants={animationProp}
                          initial="start"
                          animate="animate"
                          custom={id}
                        >
                          {word}
                        </motion.div>
                      ))}

                    <div className="text-muted -mr-10 text-xl">
                      (
                      {GAME_TEXT[currentImgIdx]?.from ||
                        GAME_TEXT[currentImgIdx].type}
                      )
                    </div>
                  </div>
                  {/* DESC ANIMATION  */}
                  <div
                    className={cn(
                      "text-sm w-full overflow-y-clip my-6",
                      value ? "text-lg font-medium" : " text-sm"
                    )}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: value ? 0.5 : 0,
                      }}
                    >
                      {value
                        ? GAME_TEXT[currentImgIdx].description
                        : truncateText(
                            GAME_TEXT[currentImgIdx].description,
                            200
                          )}
                    </motion.p>
                  </div>
                  {/* GENERES?  */}
                  {GAME_TEXT[currentImgIdx]?.genres && (
                    <div
                      className={cn(
                        "flex gap-3 flex-wrap",
                        !value && "text-xs gap-1"
                      )}
                    >
                      {GAME_TEXT[currentImgIdx]?.genres?.map((word, id) => {
                        return (
                          <motion.p
                            variants={animationProp}
                            initial="start"
                            animate="animate"
                            custom={id as number}
                            className={cn(
                              "bg-emerald-800  rounded-full px-3 py-2 text-white",
                              !value && "text-xs"
                            )}
                            key={word}
                          >
                            {word}
                          </motion.p>
                        );
                      })}
                    </div>
                  )}
                  {/* TRAITS?  */}
                  {GAME_TEXT[currentImgIdx]?.traits && (
                    <div
                      className={cn("flex gap-3", !value && "text-xs gap-1")}
                    >
                      {GAME_TEXT[currentImgIdx]?.traits?.map((trait, id) => {
                        return (
                          <motion.p
                            variants={animationProp}
                            initial="start"
                            animate="animate"
                            custom={id as number}
                            className={cn(
                              "bg-emerald-800 rounded-full px-3 py-2 text-white",
                              !value && "text-xs"
                            )}
                            key={trait}
                          >
                            {trait}
                          </motion.p>
                        );
                      })}
                    </div>
                  )}
                </div>
                {/* RIGHT PART  */}
                <div
                  className={cn(
                    "w-1/3 h-full rounded-2xl overflow-hidden shadow bg-amber-900 pointer-events-auto ",
                    hovered && "w-1/2"
                  )}
                >
                  {/* <video src={"/gameImgs/video.mp4"} autoPlay muted loop className="w-full h-full object-cover" /> */}
                  <iframe
                    src={GAME_TEXT[currentImgIdx].yt}
                    title="YouTube video player"
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              {/* BOTTOM RIGHT NUM  */}
              {!value && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-2 w-7 h-7 bg-black rounded-full right-2 text-lg text-center font-bold text-white/70"
                >
                  {currentImgIdx + 1}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={cn(
            "w-full text-5xl text-white font-bold h-full p-2 overflow-hidden relative rounded-2xl shadow-xl flex items-center justify-center"
          )}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentImgIdx + 1}
              initial={{ y: 100, position: "absolute" }}
              animate={{
                y: 0,
                position: "absolute",
                transition: {
                  type: "tween",
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              exit={{
                y: -100,
                position: "absolute",
                transition: {
                  type: "tween",
                  duration: 0.3,
                  ease: "easeIn",
                },
              }}
              className="w-full text-center"
            >
              {!hovered ? currentImgIdx + 1 : ""}
            </motion.h1>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HoverDiv;
