import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-transparent border-t-2 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Todo App. All rights reserved.
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="https://github.com/yourusername" 
            target="_blank" 
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Built with ❤️ using Next.js, Tailwind, and Clerk
        </div>
      </div>
    </footer>
  );
}