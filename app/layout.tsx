import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/base/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IT Service provider",
  description:
    "Patil Computers is a Cyber Security, Surveillance & IT Service provider across all public and private sectors. We offer a full spectrum of IT, Networking and Security services.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
