"use client";
import React from "react";
import { Moon, Sun, CheckCheck } from "lucide-react";
import { useTheme } from "next-themes";

import { User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <nav className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 ">
          <div>
            <div className="text-2xl font-mono flex items-center gap-2 font-semibold">
              Todoz <CheckCheck className="text-emerald-500" />
            </div>
          </div>
          {/* RIGHT SIDE  */}
          <div className="flex gap-3">
            {/* THEME BTN  */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CLERK BTN  */}
            <SignedOut>
              <Button asChild>
                <div>
                  <User />
                  <SignInButton />
                </div>
              </Button>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <UserButton />
              </Button>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
