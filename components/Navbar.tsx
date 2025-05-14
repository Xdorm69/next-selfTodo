"use client";
import React from "react";
import { CheckCheck, User } from "lucide-react";

import { Button } from "@/components/ui/button";


import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { MusicToggle } from "./MusicSwitch";

const Navbar = () => {
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
            <MusicToggle />

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
                <UserButton
                />
              </Button>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
