import AddTodo from "@/components/AddTodo";
import AllTodos from "@/components/AllTodos";
import TodozTopBar from "@/components/TodozTopBar";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const user = await currentUser();
  if (user)
    return (
      <div className="font-sans mt-4 mb-20">
        <div className="w-full">
          <TodozTopBar />
        </div>
        <div className="mt-4 w-full flex gap-3 justify-end">
          <AddTodo />
        </div>
        <div className="w-full overflow-hidden">
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
        <div className="relative">
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

export default page;
