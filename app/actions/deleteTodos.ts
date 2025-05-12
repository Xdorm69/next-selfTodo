"use server";

import { prisma } from "@/lib/DbConnect";

export const DeleteTodos = async (id: string) => {
  await prisma.todos.delete({ where: { id } });
  
};
