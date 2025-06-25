"use client";
import { SessionProvider } from "next-auth/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Nav from "./Home/Nav";
import { metadata } from "./metadata"; // Import metadata
import { usePathname } from "next/navigation";

import "./globals.css";

const font = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={font.className}>
        <SessionProvider>
          {pathname?.startsWith("/dashboard") ? " " : <Nav />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
