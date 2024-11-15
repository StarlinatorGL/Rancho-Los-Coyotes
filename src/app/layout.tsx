import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local"
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

const myfonts = localfont({
  src: [
    {
      path: "../../public/fonts/Amithen.ttf",
      weight: "700",
    }
  ],
  variable: "--font-Amithen",
}) 

export const metadata: Metadata = {
  title: "Rancho Los Coyotes",
  description: "Generated by create next app",
  icons: {
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${myfonts.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}

