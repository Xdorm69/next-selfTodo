"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import SkeletonWrapper from "./SkeletonWrapper";
import { Skeleton } from "./ui/skeleton";
import { TodoCard } from "./TodoCard";
import { motion, Variants, AnimatePresence } from "framer-motion";

export type TodoType = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: "pending" | "completed";
};

const GetApiCall = async () => {
  try {
    const res = await fetch("/api/get-todos").then((res) => res.json());
    if (res) return res;
  } catch (error: any) {
    console.log(error.message);
  }
};

const AllTodos = ({ len }: { len?: number }) => {
  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: GetApiCall,
    // Add retry and error handling
    retry: 1,
  });

  // Loading state
  if (todosQuery.isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(len || 3)].map((_, index) => (
          <SkeletonWrapper key={index} isLoading={true} fullWidth={true}>
            <Skeleton className="h-[200px] w-full rounded-xl" />
          </SkeletonWrapper>
        ))}
      </div>
    );
  }

  // Error state or no data
  if (todosQuery.isError || !todosQuery.data) {
    // Placeholder todos for unauthenticated or error scenarios
    const placeholderTodos = Array.from({ length: len || 3 }).map(
      (_, index) => ({
        id: `placeholder-${index}`,
        title: `Sample Todo ${index + 1}`,
        description: `This is a sample todo description ${index + 1}`,
      })
    );

    return (
      <>
        <h1 className="my-7 text-3xl font-semibold">
          {len ? `Recent Todos (${placeholderTodos.length})` : "All Todos"}
        </h1>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholderTodos.map((i) => (
            <SkeletonWrapper key={i.id} isLoading={false}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{i.title}</CardTitle>
                </CardHeader>
                <CardContent>{i.description}</CardContent>
                <CardFooter className="flex gap-2 w-full justify-end">
                  <Button variant={"ghostUp"} disabled>
                    Update
                  </Button>
                  <Button variant={"ghostDel"} disabled>
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            </SkeletonWrapper>
          ))}
        </div>
      </>
    );
  }

  // Determine which data to render
  const dataToRender = len
    ? todosQuery.data?.slice(0, len) || []
    : todosQuery.data || [];

  // No todos state
  if (dataToRender.length === 0) {
    return (
      <div className="text-center text-gray-500 my-7">
        {len ? `No recent todos available` : `No todos found`}
      </div>
    );
  }

  const animVars: Variants = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.1,
      },
    }),
  };

  // Todos rendering
  return (
    <>
      <h1 className="my-7 text-3xl font-semibold">
        {len ? `Recent Todos (${dataToRender.length})` : "All Todos"}
      </h1>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataToRender.map((i: TodoType, index: number) => (
          <motion.div
          className="rounded-xl"
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
              },

            }}

            key={i.id}
            variants={animVars}
            initial="initial"
            animate="animate"
            custom={index}
            layout
          >
            <TodoCard i={i} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AllTodos;
