
// app/actions/verifyLoggedIn.ts
"use server";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function verifyLoggedIn() {
    const user = await currentUser();
    
    if (!user) {
        return redirect("/sign-in");
    }

    return user;
}