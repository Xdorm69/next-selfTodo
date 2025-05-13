"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SaveTodo } from "@/app/actions/saveTodo";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoType } from "./AllTodos";

const AddTodo = ({ data }: { data?: TodoType }) => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    id: data?.id || "",
    title: data?.title || "",
    description: data?.description || "",
    status: data?.status || "pending",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const result = await SaveTodo({
        id: formData.id,
        title: formData.title,
        description: formData.description,
        status: formData.status,
      });
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success(data?.id ? "Todo Updated" : "Todo Added");
      setOpen(false);
    },
    onError: (error) => {
      toast.error("Failed to save todo");
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {data?.id ? (
          <Button
            className="bg-violet-600 hover:bg-violet-900 text-white text-sm font-semibold my-2"
            size={"lg"}
            variant="ghostUp"
          >
            Update
          </Button>
        ) : (
          <Button
            className="bg-violet-600 hover:bg-violet-900 text-white font-semibold my-5"
            size={"lg"}
          >
            Add Todo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-fit py-5">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold font-sans">
            {data?.id ? "Update Todo" : "Add New Todo"}
          </DialogTitle>
          <DialogDescription>
            {data?.id
              ? "Make changes to your existing todo"
              : "Create a new todo item"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right text-xl">
              Title
            </Label>
            <div className="col-span-3">
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Enter title"
                disabled={isPending}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right text-xl">
              Description
            </Label>
            <div className="col-span-3">
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Enter description"
                disabled={isPending}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-4">
              <Button
                type="submit"
                className="w-full my-3 bg-blue-500 hover:bg-blue-400 text-accent-foreground"
                disabled={isPending}
              >
                {isPending
                  ? data?.id
                    ? "Updating..."
                    : "Adding..."
                  : data?.id
                  ? "Update"
                  : "Add"}
              </Button>
            </div>
          </div>
        </form>
        <DialogFooter className="text-sm text-muted-foreground">
          We are trying are best to handle user changes at the moment.
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodo;
