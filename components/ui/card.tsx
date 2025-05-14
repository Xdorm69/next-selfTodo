"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
    scale: 0,
    opacity: 0,
  });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const box = cardRef.current.getBoundingClientRect();
        const x = e.clientX - box.left;
        const y = e.clientY - box.top;

        setMousePosition({
          x,
          y,
          scale: 1.2,
          opacity: 0.7,
        });
      }
    };

    const handleMouseEnter = () => {
      setMousePosition((prev) => ({
        ...prev,
        scale: 1.2,
        opacity: 0.7,
      }));
    };

    const handleMouseLeave = () => {
      setMousePosition((prev) => ({
        ...prev,
        scale: 0,
        opacity: 0,
      }));
    };

    const current = cardRef.current;
    if (current) {
      current.addEventListener("mousemove", handleMouseMove);
      current.addEventListener("mouseenter", handleMouseEnter);
      current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (current) {
        current.removeEventListener("mousemove", handleMouseMove);
        current.removeEventListener("mouseenter", handleMouseEnter);
        current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden group w-full h-full bg-card rounded-xl"
    >
      {/* OVERLAY  */}
      {/* MOUSE EFFECT LAYER */}
      <motion.div
        className="absolute w-[300px] z-1 h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,1), rgba(255,255,255,0))",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: mousePosition.scale,
          opacity: mousePosition.opacity,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
          mass: 0.5,
          duration: 0.2,
        }}
      />

      {/* MAIN CARD CONTENT */}
      <div
        data-slot="card"
        className={cn(
          "text-card-foreground bg-card/80 inset-0 scale-[0.98] flex flex-col gap-6 rounded-xl py-6 shadow-sm relative z-20",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <div
        data-slot="card-header"
        className={cn(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          className
        )}
        {...props}
      />
    </>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
