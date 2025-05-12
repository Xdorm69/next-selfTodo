import { TodoType } from "@/components/AllTodos";
import { prisma } from "@/lib/DbConnect";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json([
      { status: "Pending", count: 12, color: "#ff6b6b" },
      { status: "Completed", count: 8, color: "#4ecdc4" },
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
