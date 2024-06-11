import Image from "next/image"
import React from "react"
import compurterPng from "../../public/computer.png"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <p className="bg-brand flex h-10 items-center justify-center whitespace-pre-wrap text-center text-white">
        Patil Computers IT Service provider across all public and private sectors.
      </p>
      <nav className="container mx-auto flex h-20 items-center justify-between px-20 py-4">
        <div className="flex items-center gap-2 px-4 py-1">
          <Image src={compurterPng} alt="logo" width={20} height={20} />
          <span className="whitespace-nowrap text-xl font-bold text-white">Patil's Computers</span>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link href={"/"} className="text-lg text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href={"/"} className="text-lg text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href={"/"} className="text-lg text-gray-300 hover:text-white">
            About us
          </Link>
          <Link href={"/"} className="text-lg text-gray-300 hover:text-white">
            Verticals
          </Link>
          <Link href={"/"} className="text-lg text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
