import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Menu } from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Cauquenes App</title>
      </head>
      <body className="relative">
        <Menu />
        <main className="h-screen flex-1 p-7 pl-28 bg-sky-900">{children}</main>
      </body>
    </html>
  );
}
