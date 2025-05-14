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
import AddTodo from "./AddTodo";
import { SeeMoreHover } from "./SeeMoreHover";

export const TodoCard = ({ i }: { i: TodoType }) => {
  return (
    <SkeletonWrapper key={i.id} isLoading={false}>
      <Card
        className={cn(
          "flex flex-col h-full",
          i.status === "completed"
            ? "bg-gradient-to-b from-card/80 to-emerald-900/80"
            : "bg-gradient-to-b from-card/80 to-amber-900/80"
        )}
      >
        <CardHeader className="flex-shrink-0">
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
        <CardContent className="flex-grow line-clamp-3 text-muted-foreground">
          <div className="text-muted-foreground line-clamp-3">
            {i.description.length > 75 ? `${i.description.slice(0, 75)}...` : i.description}
          </div>

          <SeeMoreHover data={i} />
        </CardContent>
        <CardFooter className="flex-shrink-0 mt-auto ">
          <div className="flex items-center justify-between w-full">
            <TodoComboBox value={i.status} id={i.id} />
            <div className="flex items-center gap-2">
              <AddTodo data={i} />
              <ConfirmTodoDelete
                id={i.id}
                trigger={
                  <Button className="py-5 font-semibold" variant={"ghostDel"}>
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
