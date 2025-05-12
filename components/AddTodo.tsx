"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SaveTodo } from "@/app/actions/saveTodo";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const AddTodo = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();


  const {mutate, isPending} = useMutation({
    mutationKey: ["add-todo"],
    mutationFn: async (formData: FormData) => {
      toast.loading("Your todo is being saved", {id: 'save'})
      await SaveTodo(formData);
    },
    onSuccess: () => {
      // Close dialog
      setOpen(false);
      
      // Show success toast
      toast.success("Todo added successfully", {id: "save"});
      
      // Invalidate and refetch todos
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      // Show error toast
      toast.error("Failed to add todo", {
        description: error instanceof Error ? error.message : "An unknown error occurred",
        id: "save",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutate(formData);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-violet-600 hover:bg-violet-900 text-white font-semibold my-5"
            size={"lg"}
          >
            Add Todo
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-fit py-5">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold font-sans">
              Add Todo
            </DialogTitle>
            <DialogDescription>
              Add a new todo by providing a title. Click save to add it to your
              list.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right  text-xl">
                Title
              </Label>
              <div className="col-span-3">
                <Input
                  id="title"
                  name="title"
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
                  {isPending ? "Saving..." : "Save Todo"}
                </Button>
              </div>
            </div>
          </form>
          <DialogFooter className="text-sm text-muted-foreground">
            We are trying are best to handle user changes at the moment.
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTodo;