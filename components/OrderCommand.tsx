"use client";

import * as React from "react";
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
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryType = { value: string; label: string };

export function OrderCommand({
  value,
  catVal,
  setValue,
}: {
  value: string;
  catVal: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [open, setOpen] = React.useState(false);

  const DEFAULT_CATEGORIES: CategoryType[] = [
    { value: "asc", label: "Ascending" },
    { value: "des", label: "Descending" },
  ];

  const STATUS_CATEGORIES: CategoryType[] = [
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
  ];

  const [Categories, setCategories] =
    React.useState<CategoryType[]>(DEFAULT_CATEGORIES);

  React.useEffect(() => {
    // Dynamically set categories based on selected category
    if (catVal === "status") {
      setCategories(STATUS_CATEGORIES);
    } else {
      setCategories(DEFAULT_CATEGORIES);
    }
  }, [catVal]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? Categories.find((category) => category.value === value)?.label
            : "Select order..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {Categories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {category.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === category.value ? "opacity-100" : "opacity-0"
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
