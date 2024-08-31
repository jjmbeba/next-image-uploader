import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "sonner";
import {ConvexClientProvider} from "@/components/ConvexClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image uploader",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <ConvexClientProvider>
         <ThemeProvider
             attribute="class"
             defaultTheme="light"
             enableSystem
             disableTransitionOnChange
         >
             <Toaster />
             {children}
         </ThemeProvider>
     </ConvexClientProvider>
      </body>
    </html>
  );
}
