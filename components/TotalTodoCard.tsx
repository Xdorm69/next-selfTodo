"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CountUp from "./CountUp";
import { formatRelativeTime } from "@/lib/formatRelativeTime";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";
import { getTodoStats } from "@/app/actions/getTodoStats";

const TotalTodoCard = () => {
  const lenTodos = useQuery({
    queryKey: ["todo", "stats"],
    queryFn: () => getTodoStats(),
    retry: 2,
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  // Loading state
  if (lenTodos.isFetching) {
    return (
      <Card className="relative overflow-hidden rounded-xl border border-transparent backdrop-blur-sm shadow-lg h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-2xl">Todo Statistics</CardTitle>
          <CardDescription className="text-sm">Total Todoz</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Skeleton className="h-[60px] w-[100px]" />
        </CardContent>
        <CardFooter className="justify-end">
          <Skeleton className="h-[20px] w-1/2" />
        </CardFooter>
      </Card>
    );
  }

  // Error state
  if (lenTodos.isError) {
    return (
      <Card className="relative overflow-hidden rounded-xl border border-transparent backdrop-blur-sm shadow-lg shadow-foreground">
        <CardHeader>
          <CardTitle>Error</CardTitle>
          <CardDescription>Failed to load todos</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <p className="text-red-500">
            {lenTodos.error instanceof Error
              ? lenTodos.error.message
              : "An unknown error occurred"}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative overflow-hidden rounded-xl h-full border border-transparent flex flex-col justify-between backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Todo Statistics</CardTitle>
        <CardDescription className="text-sm">Total Todoz</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="relative">
          <h1 className="text-5xl font-bold">
            <CountUp
              from={0}
              to={lenTodos.data?.todosLength ?? 6}
              separator=","
              direction="up"
              delay={0}
              duration={.5}
              className="count-up-text"
            />
          </h1>
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <p className="text-sm text-muted-foreground">
          Last updated:{" "}
          {lenTodos.data?.latestTodo
            ? formatRelativeTime(lenTodos.data.latestTodo.updatedAt)
            : "No todos yet"}
        </p>
      </CardFooter>
    </Card>
  );
};

export default TotalTodoCard;
