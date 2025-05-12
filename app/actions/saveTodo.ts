"use server";

import { prisma } from "@/lib/DbConnect";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function SaveTodo(formData: FormData) {

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if(!title || !description){
    throw new Error("All feilds are mandatory");
  }

  const user = await currentUser();
  if (!user) {
    return redirect("/sign-in");
  }

  await prisma.todos.create({
    data: {
      title,
      description,
      userId: user.id,
    },
  });

  return {
    title,
    description,
  };
}
