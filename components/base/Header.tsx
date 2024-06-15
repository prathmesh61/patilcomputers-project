import Link from "next/link"
import {
  Computer,
  MailCheck,
  PhoneCallIcon,
  SquareGanttChart,
  X,
} from "lucide-react"
import { links } from "@/utils"
import MobileNavbar from "../ui/MobileNavbar"

const Header = () => {
  return (
    <header>
      <div className="relative flex flex-wrap items-center justify-around gap-5 bg-brand-dark">
        <p className="hidden h-10 items-center justify-center whitespace-pre-wrap text-center text-xs text-gray-300 lg:flex">
          <SquareGanttChart size={16} /> Patil Computers IT Service provider
          across all public and private sectors.
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
        <Link href={"/"} className="flex items-center gap-2">
          <Computer size={15} />
          <span className="whitespace-nowrap text-sm font-bold text-white lg:text-xl">
            Patil Computers .
          </span>
        </Link>
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
        <MobileNavbar />
      </nav>
    </header>
  )
}

export default Header
