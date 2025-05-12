import { prisma } from "@/lib/DbConnect"
import { NextResponse } from "next/server"

export async function GET() {
  const todos = await prisma.todos.findMany();
  return todos.length > 0 ? NextResponse.json(todos) : NextResponse.json([]);
}