"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "../ui/ThemeProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactLenis } from "lenis/react";
import Navbar from "../Navbar";
import { Footer } from "../Footer";


const RootProvider = ({ children }: { children: React.ReactNode }) => {
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
          <video
            src={"/gameImgs/video.mp4"}
            loop
            autoPlay
            muted
            playsInline
            preload="auto"
            className="fixed bottom-0 left-0 w-full h-full object-cover opacity-30 z-[-1]"
            onError={(e) => {
              console.error("Video failed to load", e);
            }}
          />
          <Footer />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReactLenis>
  );
};

export default RootProvider;
