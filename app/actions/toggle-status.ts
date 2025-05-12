"use server";

import { prisma } from "@/lib/DbConnect";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function ToggleStatus(id: string, command:string) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const res = await prisma.$transaction(async (tx) => {
    const todo = await tx.todos.findFirst({
      where: {
        userId: user.id,
        id,
      },
    });

    if (!todo) {
      throw new Error("Todo not found");
    }

    return await tx.todos.update({
      where: {
        userId: user.id,
        id,
      },
      data: {
        status: command,
      },
    });
  });

  return { res: "success", status: 200 };
}
