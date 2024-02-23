import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Menu } from "./components/Menu";
import  MainSection from "./components/MainSection";
import SwitchDarkMode from "./components/SwitchDarkMode";

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
      <body className="relative bg-[white] dark:bg-[#1f2937]">
        <Menu />
        <MainSection>{children}</MainSection>
      </body>
      
    </html>
  );
}
