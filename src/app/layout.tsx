import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chope — share the ride you're already making",
  description:
    "Chope is how neighbours share the ride they're already making. Register your regular commute and let people from your own estate tag along.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
