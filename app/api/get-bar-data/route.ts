import { TodoType } from "@/components/AllTodos";
import { prisma } from "@/lib/DbConnect";
import { currentUser } from "@clerk/nextjs/server";
import {  NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json([
      { status: "Pending", count: 2, color: "#ff6b6b" },
      { status: "Completed", count: 1, color: "#4ecdc4" },
    ]);
  }
  const res: TodoType[] = await prisma.todos.findMany({
    where: {
      userId: user.id,
    },
  });

  const countCompleted = res.filter(
    (item) => item.status === "completed"
  ).length;
  const countPending = res.filter((item) => item.status === "pending").length;
  return NextResponse.json([
    { status: "Pending", count: countPending, color: "#ff6b6b" },
    { status: "Completed", count: countCompleted, color: "#4ecdc4" },
  ]);
}
