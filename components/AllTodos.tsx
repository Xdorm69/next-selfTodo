"use client";
import React, { useState } from "react";
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
import { motion, Variants } from "framer-motion";
import { CategoryCommandBox } from "./CategoryCommandBox";
import { OrderCommand } from "./OrderCommand";
import { Search } from "lucide-react";

export type TodoType = {
  id: string;
  title: string;
  userId: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  status: "pending" | "completed";
};

const AllTodos = ({ len }: { len?: number }) => {
  const [categoryValue, setCategoryValue] = useState("");
  const [orderValue, setOrderValue] = useState("");

  const GetApiCall = async (): Promise<TodoType[] | undefined> => {
    try {
      const response = await fetch(`/api/get-todos?category=${categoryValue}&order=${orderValue}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disable caching to force fresh fetch
      });

      if (response.status === 404) {
        console.error("API endpoint not found");
        return undefined;
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res: TodoType[] = await response.json();
      return res;
    } catch (error) {
      console.error(
        "Error fetching todos:",
        error instanceof Error ? error.message : error
      );
      return undefined;
    }
  };

  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: GetApiCall,
    // Add retry and error handling
    retry: 1,
    // Refetch whenever order and category change
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,    
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
  if (todosQuery.isError) {
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
        <div className="my-7 text-3xl flex items-center gap-2 font-semibold">
          {len ? `Recent Todos (${placeholderTodos.length})` : "All Todos"}
        </div>
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
  const dataToRender = todosQuery.data as TodoType[];
  // No todos state
  if (dataToRender?.length === 0) {
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
        <div>All Todos</div>
        <div className="flex mt-2 gap-2 items-center">
          <CategoryCommandBox
            value={categoryValue}
            setValue={setCategoryValue}
          />
          <OrderCommand value={orderValue} catVal={categoryValue} setValue={setOrderValue} />
          <Button onClick={() => todosQuery.refetch()}>
            <div className="flex gap-1 items-center">
              <span><Search className="w-5 h-5" /></span>
              <h1>Search</h1>
            </div>
          </Button>
        </div>
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
