import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { DeleteTodos } from "@/app/actions/deleteTodos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function ConfirmTodoDelete({
  trigger,
  id,
}: {
  trigger: React.ReactNode;
  id: string;
}) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["todos", "delete"],
    mutationFn: async (id: string) => {
      toast.loading("Deleting todo", { id: "delete" });
      await DeleteTodos(id);
    },
    onSuccess: () => {
      toast.success("Todo deleted successfully", { id: "delete" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.refetchQueries({ queryKey: ["todos"] });
    },
  });

  const handleDeleteTodo = (id: string) => {
    mutate(id);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
      {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your todo
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isPending}
            onClick={() => handleDeleteTodo(id)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
