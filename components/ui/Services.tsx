import { services } from "@/utils"
import React from "react"
import Service from "./Service"

const Services = () => {
  return (
    <section className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-center text-4xl font-extrabold">Our Exclusive IT Solution Services</h2>
      <div className="grid grid-cols-1 grid-rows-1 justify-evenly gap-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-3">
        {services.map((item, index) => (
          <Service key={index} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Services
