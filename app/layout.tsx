import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";
import LayoutWrapper from "./LayoutWrapper";

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
      <body>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}

