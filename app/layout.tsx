import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Barlow, Montserrat, Work_Sans } from "next/font/google";
import { Toaster } from "sonner";
import RootProvider from "@/components/providers/RootProvider";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});


const worksans = Work_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-worksans",
});

export const metadata: Metadata = {
  title: "Todoz- Streamline Your Productivity",
  description:
    "A powerful todo management app to help you organize, track, and accomplish your tasks with ease.",
  icons: {
    icon: [
      { url: "/note.png" },
      { url: "/note.png", sizes: "16x16", type: "image/png" },
      { url: "/note.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/note.png" }],
  },
  openGraph: {
    title: "Todoz- Your Personal Task Manager",
    description: "Organize, prioritize, and track your todos effortlessly.",
    images: [{ url: "/note.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Todoz- Productivity Simplified",
    description: "Manage your tasks like a pro with TodoFlow",
    images: ["/note.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased" suppressHydrationWarning>
          <div className={`${montserrat.variable} ${worksans.variable} ${barlow.className}`}>
            <RootProvider>{children}</RootProvider>
            <Toaster
              theme="dark"
              position="bottom-right"
              richColors
              closeButton
            />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
