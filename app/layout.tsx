import type { Metadata } from "next"
import { Inter, Kumbh_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/base/Header"
import Footer from "@/components/base/Footer"

const inter = Inter({ subsets: ["latin"] })
const kumbh = Kumbh_Sans({ subsets: ["latin"] })

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
      <body className={kumbh.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
