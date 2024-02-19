import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
     <main className="h-screen flex-1 pl-28">{children}</main>
  )
}