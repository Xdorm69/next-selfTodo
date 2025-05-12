import { cn } from "@/lib/utils";
import { TodoType } from "./AllTodos";
import SkeletonWrapper from "./SkeletonWrapper";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TodoComboBox } from "./TodoComboBox";
import { Button } from "./ui/button";
import { ConfirmTodoDelete } from "./ConfirmTodoDelete";

export const TodoCard = ({ i }: { i: TodoType }) => {
    


  return (
    <SkeletonWrapper key={i.id} isLoading={false}>
      <Card
        className={cn(
          i.status === "completed"
            ? "bg-gradient-to-b from-transparent to-emerald-900 border-t-0"
            : "bg-gradient-to-b from-transparent to-amber-900 border-t-0"
        )}
      >
        <CardHeader>
          <CardTitle className=" w-full">
            <div className="w-full flex justify-between items-center">
              <div className="text-2xl">{i.title}</div>
              <div className="flex flex-col gap-1 items-end">
                <div className="text-sm text-forground">
                  Updated: {new Date(i.updatedAt).toLocaleDateString()}
                </div>
                <div className="text-xs text-muted-foreground ">
                  Created: {new Date(i.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent
          className="w-1/2 overflow-y-auto max-h-[200px] h-fit 
          scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/50 
          hover:scrollbar-thumb-primary/80 transition-all duration-300 
          scrollbar-thumb-rounded-full pr-2"
        >
          {i.description}
        </CardContent>
        <CardFooter className="flex gap-2 w-full justify-end">
          <div className="w-fit">
            <TodoComboBox value={i.status} id={i.id} />
            <div className="flex w-full justify-between items-center mt-3">
              <Button variant={"ghostUp"}>Update</Button>
              <ConfirmTodoDelete
              id={i.id}
                trigger={
                  <Button
                    variant={"ghostDel"}                    
                  >
                    Delete
                  </Button>
                }
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </SkeletonWrapper>
  );
};
