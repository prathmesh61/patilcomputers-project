import {
  Globe,
  Globe2,
  MailCheckIcon,
  NetworkIcon,
  PhoneCallIcon,
} from "lucide-react"
import Link from "next/link"
import React from "react"

const ContactUs = () => {
  return (
    <section className="container mx-auto flex h-[450px] w-full flex-col flex-wrap items-center justify-center gap-4 p-4">
      <h1 className="text-4xl font-extrabold lg:text-6xl">Contact Us</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          <MailCheckIcon
            size={45}
            className="rounded-full bg-brand-dark/65 p-2"
          />{" "}
          patilcomputers@gmail.com
        </div>
        <div className="flex items-center gap-3">
          <PhoneCallIcon
            size={45}
            className="rounded-full bg-brand-dark/65 p-2"
          />{" "}
          9768180229 / 9011758573
        </div>
        <Link href={"/"} className="flex items-center gap-3">
          <Globe size={45} className="rounded-full bg-brand-dark/65 p-2" />{" "}
          patilcomputer.com
        </Link>
      </div>
    </section>
  )
}

export default ContactUs
