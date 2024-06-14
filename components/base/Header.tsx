import React from "react"
import Link from "next/link"
import { Computer, PhoneCallIcon, SquareGanttChart } from "lucide-react"

const Header = () => {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-around gap-5 bg-brand-dark">
        <p className="flex h-10 items-center justify-center whitespace-pre-wrap text-center text-sm text-gray-300">
          <SquareGanttChart size={16} /> Patil Computers IT Service provider across all public and
          private sectors.
        </p>
        <p className="flex h-10 items-center justify-center whitespace-pre-wrap text-center text-sm text-gray-300">
          <PhoneCallIcon size={16} /> +917676767676
        </p>
      </div>
      <nav className="container mx-auto flex h-20 items-center justify-between px-20 py-4">
        <div className="flex items-center gap-2 px-4 py-1">
          <Computer size={20} />
          <span className="whitespace-nowrap text-xl font-bold text-white">Patil Computers .</span>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link href={"/"} className="text-base text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href={"/"} className="text-base text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href={"/"} className="text-base text-gray-300 hover:text-white">
            About us
          </Link>
          <Link href={"/"} className="text-base text-gray-300 hover:text-white">
            Verticals
          </Link>
          <Link href={"/"} className="text-base text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
