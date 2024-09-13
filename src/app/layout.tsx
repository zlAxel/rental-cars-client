import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renta de autos",
  description: "Renta de autos en México",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NextTopLoader color="#000" />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
