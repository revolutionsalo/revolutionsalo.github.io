import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Revolution Fight",
  description: "Kamppailulajien opetusta kaikentasoisille harrastajille",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi" className="scroll-smooth">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
