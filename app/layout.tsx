import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism, shadesOfPurple } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitch Clone",
  description: "A simple Clone of Twitch website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
    
     appearance={{baseTheme:[neobrutalism,shadesOfPurple]}}>
    <html lang="en">
      <body className={inter.className}>
        
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          storageKey="GameLive-theme"
        > 
          <Toaster theme="light" position="bottom-center"/>
          {children}
          
          </ThemeProvider>
        
        </body>
    </html>
    </ClerkProvider>
  );
}
