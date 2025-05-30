import { TodoType } from "@/components/AllTodos";
import { prisma } from "@/lib/DbConnect";
import { DEMO_TODOS } from "@/lib/constants";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json(DEMO_TODOS);
  }

  const url = new URL(request.url);
  const order = url.searchParams.get("order");
  const category = url.searchParams.get("category");

  if (!order || !category) {
    const todos: TodoType[] = await prisma.todos.findMany({
      where: {
        userId: user.id,
      },
    });

    return NextResponse.json(todos);
  }

  const todos: TodoType[] = await prisma.todos.findMany({
    where: {
      userId: user.id,
      ...(category === "status" && order === "pending"
        ? { status: "pending" }
        : {}),
      ...(category === "status" && order === "completed"
        ? { status: "completed" }
        : {}),
    },
    orderBy:
      category === "title" && order === "asc"
        ? { title: "asc" }
        : category === "title" && order === "des"
        ? { title: "desc" }
        : category === "createdAt" && order === "asc"
        ? { createdAt: "asc" }
        : category === "createdAt" && order === "des"
        ? { createdAt: "desc" }
        : category === "updatedAt" && order === "asc"
        ? { updatedAt: "asc" }
        : category === "updatedAt" && order === "des"
        ? { updatedAt: "desc" }
        : { createdAt: "desc" },
  });
  return NextResponse.json(todos);
}
