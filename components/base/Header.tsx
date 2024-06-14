"use client"
import React, { useState } from "react"
import Link from "next/link"
import { AlignRight, Computer, PhoneCallIcon, SquareGanttChart, X } from "lucide-react"
import { links } from "@/utils"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="relative hidden flex-wrap items-center justify-around gap-5 bg-brand-dark lg:flex">
        <p className="flex h-10 items-center justify-center whitespace-pre-wrap text-center text-sm text-gray-300">
          <SquareGanttChart size={16} /> Patil Computers IT Service provider across all public and
          private sectors.
        </p>
        <p className="flex h-10 items-center justify-center whitespace-pre-wrap text-center text-sm text-gray-300">
          <PhoneCallIcon size={16} /> +917676767676
        </p>
      </div>
      <nav className="container mx-auto flex h-20 items-center justify-between px-20 py-4">
        <div className="flex items-center gap-2">
          <Computer size={20} />
          <span className="whitespace-nowrap text-xl font-bold text-white">Patil Computers .</span>
        </div>
        <div className="hidden items-center justify-center gap-6 lg:flex">
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className="text-base font-medium text-gray-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      <span
        className="fixed right-16 top-6 flex lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <AlignRight size={26} className="cursor-pointer" />
      </span>
      {open && (
        <nav className="absolute right-0 top-0 z-10 flex h-screen w-[200px] bg-white lg:hidden">
          <span className="absolute right-2 top-2" onClick={() => setOpen((prev) => !prev)}>
            <X size={26} className="cursor-pointer border-2 border-gray-500 p-1 text-gray-500" />
          </span>
          <div className="mt-10 flex flex-col gap-4 p-4">
            {links.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="flex items-center gap-2 text-lg font-medium text-black"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
