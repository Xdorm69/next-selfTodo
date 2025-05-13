"use client";

import React, { useEffect } from "react";

import TodozTopBar from "@/components/TodozTopBar";
import AddTodo from "@/components/AddTodo";
import AllTodos from "@/components/AllTodos";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { ClerkUserPropType } from "@/app/page";


const TodoPageClient = ({ user }: {user: ClerkUserPropType}) => {
  const { addListener } = useClerk();
  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    const unsubscribe = addListener(({ user }) => {
      if (!user) {
        router.push("/"); // Refresh after sign-out
        queryClient.invalidateQueries();
      }
    });
    return () => unsubscribe();
  }, [addListener]);

  if (user)
    return (
      <div className="font-sans mt-4 mb-20">
        <div className="w-full">
          <TodozTopBar />
        </div>
        <div className="mt-4 w-full flex gap-3 justify-end">
          <AddTodo />
        </div>
        <div className="w-full">
          <AllTodos />
        </div>
      </div>
    );
  else {
    return (
      <div className="font-sans mt-4">
        <div className="w-full">
          <TodozTopBar />
        </div>
        <div className="mt-4 w-full flex gap-3 justify-end">
          <AddTodo />
        </div>
        <div className="relative overflow-hidden w-full">
          <AllTodos len={6} />

          <div
            className="h-3/4 w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent to overflow-x-hidden to-black backdrop-blur-sm mask"
            style={{
              maskImage: "linear-gradient(to top, black 30%, transparent)",
            }}
          ></div>

          <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-2xl">
            Log in to use <span className="text-green-500">Todoz</span>
          </p>
        </div>
      </div>
    );
  }
};

export default TodoPageClient;
