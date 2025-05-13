"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "../ui/ThemeProvider";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import {ReactLenis} from "lenis/react"
import Navbar from "../Navbar";

const RootProvider = ({children}: {children: React.ReactNode}) => {
    const queryClient = new QueryClient();
  return (
    <ReactLenis root>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="container mx-auto">{children}</div>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReactLenis>
  );

}

export default RootProvider