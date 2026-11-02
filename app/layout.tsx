import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const highTower = localFont({
  src: [
    { path: "./fonts/HighTowerText-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/HighTowerText-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-tower-face",
});

const tanker = localFont({
  src: "./fonts/Tanker-Regular.otf",
  variable: "--font-tanker-face",
});

const clashGrotesk = localFont({
  src: "./fonts/ClashGrotesk-Regular.otf",
  variable: "--font-clash-face",
});

export const metadata: Metadata = {
  title: "EBTS",
  description: "The computational economy before every event.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${highTower.variable} ${tanker.variable} ${clashGrotesk.variable} h-full antialiased`}
    >
      <body className="flex relative flex-col min-h-full">{children}</body>
    </html>
  );
}
