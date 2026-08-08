import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

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
    <html
      lang="en"
      className={cn("dark scroll-smooth font-sans [color-scheme:dark]", geist.variable)}
    >
      <body className="overflow-x-hidden bg-background font-[family-name:var(--sans)] leading-[1.6] text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light">
        {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
