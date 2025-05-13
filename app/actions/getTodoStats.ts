// app/actions/getTodoStats.ts
"use server";

import { prisma } from "@/lib/DbConnect";
import { DEMO_TODOS } from "@/lib/constants";
import { currentUser } from "@clerk/nextjs/server";


export async function getTodoStats() {
  const user = await currentUser();
  if (!user) {
    return {
      todosLength: DEMO_TODOS.length,
      latestTodo: DEMO_TODOS[DEMO_TODOS.length - 1],
      userStatus: "unauthenticated",
    };
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
    latestTodo,
  };
}
