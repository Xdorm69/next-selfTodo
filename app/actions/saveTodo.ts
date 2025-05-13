"use server";

import { prisma } from "@/lib/DbConnect";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export type FormDataType = {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed";
};

export async function SaveTodo(formData: FormDataType) {
  const { title, description, id } = formData;

  if (!title || !description) {
    throw new Error("All feilds are mandatory");
  }

  const user = await currentUser();
  if (!user) {
    return redirect("/sign-in");
  }

  const isPresentTodo = await prisma.todos.findFirst({
    where: {
      userId: user.id,
      id,
    },
  });

  if (isPresentTodo) {
    return await prisma.todos.update({
      where: { userId: user.id, id },
      data: { title, description, updatedAt: new Date() },
    });
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
