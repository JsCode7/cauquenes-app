import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Menu } from "./components/Menu";

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Cauquenes App",
  description: "| Recorre distintos lugares de Cauquenes conociendo la comuna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.className}>
      <head>
        <title>Cauquenes App</title>
      </head>
      <body className="relative">
        <Menu />
        <main className="h-screen flex-1 p-7 pl-28">{children}</main>
      </body>
    </html>
  );
}
