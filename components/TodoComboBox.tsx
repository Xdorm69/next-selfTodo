"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToggleStatus } from "@/app/actions/toggle-status";
import { toast } from "sonner";

const Options = [
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "pending",
    label: "Pending",
  },
];

export function TodoComboBox({ value, id }: { value: string; id: string }) {
  const queryClient = useQueryClient();
  const ToggleMutation = useMutation({
    mutationKey: ["toggle"],
    mutationFn: ({id, command}: {id: string, command: string}) => {
      toast.loading("status is being changed", { id: "status" });
      return ToggleStatus(id, command);
    },
    onSuccess: () => {
      toast.success("Status changed successfully", { id: "status" });
    },
    onError: () => {
      toast.error("Failed to change the status", { id: "status" });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.invalidateQueries({ queryKey: ["bar"] });
      setOpen(false);
    },
  });

  const handleMutation = async (id: string, command: string) => {
    try {
      await ToggleMutation.mutateAsync({id, command});
    } catch (error) {
      console.error("Failed to toggle status", error);
    }
  };

  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[180px] justify-between"
        >
          {value
            ? Options.find((option) => option.value === value)?.label
            : "Select Status"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {Options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  disabled={ToggleMutation.isPending}
                  onSelect={() => handleMutation(id, option.value)}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
