"use client"
import React, { useState } from "react"
import Link from "next/link"
import { AlignRight, Computer, MailCheck, PhoneCallIcon, SquareGanttChart, X } from "lucide-react"
import { links } from "@/utils"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="relative flex flex-wrap items-center justify-around gap-5 bg-brand-dark">
        <p className="hidden h-10 items-center justify-center whitespace-pre-wrap text-center text-xs text-gray-300 lg:flex">
          <SquareGanttChart size={16} /> Patil Computers IT Service provider across all public and
          private sectors.
        </p>
        <div className="flex items-center gap-2">
          <p className="flex h-10 items-center justify-center whitespace-pre-wrap text-center text-xs text-gray-300">
            <PhoneCallIcon size={16} /> +917676767676
          </p>
          <p className="flex items-center gap-1 text-xs text-gray-300">
            <MailCheck size={16} /> patilcomputers@gmail.com
          </p>
        </div>
      </div>
      <nav className="container mx-auto flex h-20 items-center justify-between px-20 py-4">
        <div className="flex items-center gap-2">
          <Computer size={15} />
          <span className="whitespace-nowrap text-sm font-bold text-white lg:text-xl">
            Patil Computers .
          </span>
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
        <span className="flex lg:hidden" onClick={() => setOpen((prev) => !prev)}>
          <AlignRight size={26} className="cursor-pointer" />
        </span>
      </nav>

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
