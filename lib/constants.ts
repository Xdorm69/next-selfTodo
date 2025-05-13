import { TodoType } from "@/components/AllTodos";

export const DEMO_TODOS: TodoType[] = [
  {
    id: "demo1",
    title: "Learn Next.js",
    description: "Study Next.js fundamentals",
    status: "pending",
    userId: "demo-user",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "demo2",
    title: "Build a Todo App",
    description: "Create a full-stack todo application",
    status: "completed",
    userId: "demo-user",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "demo3",
    title: "Deploy to Vercel",
    description: "Deploy the application to Vercel",
    status: "pending",
    userId: "demo-user",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
