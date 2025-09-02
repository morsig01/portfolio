import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Sans_3 } from "next/font/google";

import Navbar from "@/components/sections/Navbar";

import "./globals.css";
import { Providers } from "./providers";
import MobileNavBar from "@/components/MobileNavBar";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morgan Sigland",
  description: "Morgan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSans.variable} antialiased`}
      >
        <Providers>
                <Navbar/>
                <MobileNavBar />
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
