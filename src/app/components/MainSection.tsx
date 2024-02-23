import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
     <main className="h-screen flex-1 pl-28 pr-28 py-8 sm-phone:pr-2 phone:pr-2 xl-phone:pr-2 sm-phone:pl-24 phone:pl-24 xl-phone:pl-24 phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">{children}</main>
  )
}
