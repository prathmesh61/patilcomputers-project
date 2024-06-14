import { TService } from "@/utils/types"
import React from "react"

type Props = {
  item: TService
}

const Service = ({ item }: Props) => {
  return (
    <article className="flex max-h-[250px] max-w-sm flex-col gap-2 rounded-lg bg-brand/65 p-2">
      <div className="flex items-center gap-2">
        <item.Icon size={20} />
        <h3 className="text-lg font-bold">{item.title}</h3>
      </div>
      <p className="text-gray-200">{item.description}</p>
    </article>
  )
}

export default Service
