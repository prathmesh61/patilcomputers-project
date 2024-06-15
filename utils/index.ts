import {
  BatteryCharging,
  BookAIcon,
  Building2,
  Camera,
  Computer,
  Contact2,
  Cpu,
  HardDrive,
  HomeIcon,
  Laptop2,
  PenTool,
  Printer,
  Server,
  Shield,
  SwitchCamera,
} from "lucide-react"
import { TLinks, TService } from "./types"

export const services: TService[] = [
  {
    title: "Laptop Computers",
    description:
      "Offering a diverse selection of laptops from top brands, perfect for mobility and performance in any setting.",
    Icon: Laptop2,
  },
  {
    title: "Desktop Computers",
    description:
      "Supplying desktop computers from all leading brands, tailored to meet your personal or business requirements.",
    Icon: Computer,
  },
  {
    title: "Workstations",
    description:
      "Providing powerful workstations designed for high-end computing tasks, ideal for professionals in various fields.",
    Icon: Cpu,
  },
  {
    title: "Printer Solutions",
    description:
      "Offering a wide range of high-quality printers suitable for all your printing needs, from home use to large business environments.",
    Icon: Printer,
  },
  {
    title: "Server Solutions",
    description:
      "Providing reliable and powerful server solutions to ensure your business operations run smoothly and efficiently.",
    Icon: Server,
  },
  {
    title: "Firewall Solutions",
    description:
      "Implementing advanced firewall systems to protect your network from unauthorized access and cyber threats.",
    Icon: Shield,
  },
  {
    title: "Network Switches",
    description:
      "Providing high-performance network switches to enhance the connectivity and efficiency of your business infrastructure.",
    Icon: SwitchCamera,
  },
  {
    title: "Surveillance Cameras",
    description:
      "Offering a variety of surveillance cameras to ensure the security and monitoring of your premises.",
    Icon: Camera,
  },
  {
    title: "Uninterruptible Power Supply (UPS)",
    description:
      "Ensuring continuous power supply and protection for your devices with our reliable UPS solutions.",
    Icon: BatteryCharging,
  },
  {
    title: "Solid State Drives (SSD)",
    description:
      "Supplying high-speed SSDs to boost the performance and storage capabilities of your computers and servers.",
    Icon: HardDrive,
  },
  {
    title: "Annual Maintenance Contract (AMC)",
    description:
      "Providing comprehensive annual maintenance contracts to keep your IT infrastructure running smoothly and efficiently.",
    Icon: PenTool,
  },
]

export const links: TLinks[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Service",
    link: "/service",
  },
  {
    name: "Contact",
    link: "/contact-us",
  },
  {
    name: "About",
    link: "/about-us",
  },
]
