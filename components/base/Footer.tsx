import { links } from "@/utils"
import { LocateIcon, MailCheck, PhoneCall } from "lucide-react"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer
      id="contact-us"
      className="mt-20 flex flex-wrap items-center gap-10 bg-brand-dark/65 px-4 py-10 lg:justify-evenly lg:gap-4"
    >
      <div className="flex flex-col gap-4">
        <h2 className="w-fit bg-white p-2 text-xl font-extrabold text-black">
          Patil Computers
        </h2>
        <p className="max-w-sm text-sm font-medium">
          Our main focus is on providing Quality Assured Products to our clients
          at reasonable market prices.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Quick Links</h2>
        <div className="mt-4 flex flex-col gap-y-4">
          {links.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Have a Questions?</h2>
        <div className="flex flex-col gap-3">
          <p className="flex max-w-sm items-center gap-2 text-sm font-medium">
            <LocateIcon size={20} />
            Shop no 5, Plot No 08, PushpSarita, Sector-17, Kamothe, Navi
            Mumbai-410209.
          </p>
          <p className="flex items-center gap-2 text-sm font-medium">
            <PhoneCall size={20} /> 9768180229 / 9011758573
          </p>
          <p className="flex items-center gap-2 text-sm font-medium">
            <MailCheck size={20} /> patilcomputers@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
