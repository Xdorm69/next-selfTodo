// app/actions/getTodoStats.ts
"use server";

import { prisma } from "@/lib/DbConnect";
import { currentUser } from "@clerk/nextjs/server";

export async function getTodoStats() {
    const user = await currentUser();
    if(!user){
        return {todosLength: 0, latestTod: {updatedAt: "Not available"}};
    }
  const todosLength = await prisma.todos.count();
  
  const latestTodo =
    todosLength > 0
      ? await prisma.todos.findFirst({
          orderBy: {
            updatedAt: "desc",
          },
        })
      : null;

  return { 
    todosLength, 
    latestTodo 
  };
}