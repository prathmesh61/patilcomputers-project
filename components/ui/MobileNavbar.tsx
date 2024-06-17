"use client"

import { links } from "@/utils"
import { AlignRight, X } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <span className="flex lg:hidden" onClick={() => setOpen((prev) => !prev)}>
        <AlignRight size={26} className="cursor-pointer" />
      </span>
      {open && (
        <nav className="absolute right-0 top-0 z-20 flex h-screen w-[200px] bg-white lg:hidden">
          <span
            className="absolute right-2 top-2"
            onClick={() => setOpen((prev) => !prev)}
          >
            <X
              size={26}
              className="cursor-pointer border-2 border-gray-500 p-1 text-gray-500"
            />
          </span>
          <div className="ml-5 mt-20 flex flex-col gap-8 p-4">
            {links.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="flex items-center gap-2 text-lg font-medium text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  )
}

export default MobileNavbar
