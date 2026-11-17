import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desk — Tables for Modern Workspaces",
  description:
    "Beautifully crafted tables for home offices, studios, and modern workspaces. Designed to last. Built to inspire.",
  keywords: ["desk", "tables", "home office", "studio", "furniture", "modern"],
  openGraph: {
    title: "Desk — Tables for Modern Workspaces",
    description:
      "Beautifully crafted tables for home offices, studios, and modern workspaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
