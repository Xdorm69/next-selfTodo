import { prisma } from "@/lib/DbConnect"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const todos = await prisma.todos.findMany();
  return todos.length > 0 ? NextResponse.json(todos) : NextResponse.json([]);
}