import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Kampung Ride — share the ride you're already making",
  description:
    "Kampung Ride is how neighbours share the ride they're already making. Register your regular commute and let people from your own estate tag along.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
