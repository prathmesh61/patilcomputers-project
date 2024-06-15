import { LucideIcon } from "lucide-react"
import { LinkProps } from "next/link"

export type TService = {
  title: string
  Icon: LucideIcon
  description: string
}
export type TLinks = {
  name: string
  link: LinkProps["href"]
}
