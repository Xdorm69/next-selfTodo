import { CalendarDays } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { TodoType } from "./AllTodos";
import { motion } from "motion/react";
import { GetRandomEmoji } from "@/lib/utils";

export function SeeMoreHover({ data }: { data: TodoType }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="p-0 -mt-2">
          @see more
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar className="relative w-12 h-12 overflow-visible">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-4xl"
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: [-10, 10, -10],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                {data.status === "pending"
                  ? GetRandomEmoji("pending")
                  : GetRandomEmoji("completed")}
              </motion.div>
            </div>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{data.title}</h4>
            <p className="text-sm">{data.description}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Created {new Date(data.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
