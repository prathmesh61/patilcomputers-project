import Image from "next/image"
import React from "react"
import img from "@/public/images/why-choose-img.webp"
import { BarChart, BookMarkedIcon, Calendar, WorkflowIcon } from "lucide-react"
const WhyChooseUs = () => {
  return (
    <section className="flex h-fit w-full flex-wrap items-center justify-evenly gap-10 bg-brand-dark/65 px-4 py-8">
      <div className="flex flex-col gap-3">
        <Image
          src={img}
          alt="why-chose-us-Image"
          width={500}
          height={100}
          className="rounded-lg object-contain"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-medium">WHY CHOOSE US?</h4>
        <h2 className="text-2xl font-bold">FOR GENUINE SERVICE</h2>
        <div className="flex max-w-xl flex-col gap-y-3">
          <span className="flex items-center gap-2 bg-white px-2 py-1 text-black">
            <WorkflowIcon size={20} /> Our success comes from you, through us helping.
          </span>
          <span className="flex items-center gap-2 bg-white px-2 py-1 text-black">
            <BookMarkedIcon size={20} />
            Our main focus is on providing Quality Assured Products to our clients.
          </span>
          <span className="flex items-center gap-2 bg-white px-2 py-1 text-black">
            <BarChart size={20} />
            Our Team always provide and best solution for a problem.
          </span>
          <span className="flex items-center gap-2 bg-white px-2 py-1 text-black">
            <Calendar size={20} />
            Experienced for Every Kinds of IT Solution
          </span>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
