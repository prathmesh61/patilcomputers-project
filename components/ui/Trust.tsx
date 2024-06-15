import Image from "next/image"
import React from "react"
import img from "@/public/images/trust-section-img.jpg"

const Trust = () => {
  return (
    <section className="flex h-fit flex-col items-center gap-10 p-4">
      <h2 className="text-5xl font-extrabold">Our Promise</h2>
      <div className="flex flex-wrap items-center gap-6">
        <Image
          src={img}
          width={500}
          height={150}
          alt="trust-section-image"
          className="rounded-lg object-cover"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2">
          <div className="rounded-lg bg-brand/65 p-2">
            <p className="text-lg font-medium">Honesty and Transparency</p>
            <span className="text-xs">
              We believe in complete honesty and transparency with our
              customers.
            </span>
          </div>

          <div className="rounded-lg bg-brand/65 p-2">
            <p className="text-lg font-medium">Quality Products and Services</p>
            <span className="text-xs">
              We offer only the highest quality products and services.
            </span>
          </div>
          <div className="rounded-lg bg-brand/65 p-2">
            <p className="text-lg font-medium">Customer-Centric Approach</p>
            <span className="text-xs">
              Our customers are at the heart of everything we do.
            </span>
          </div>
          <div className="rounded-lg bg-brand/65 p-2">
            <p className="text-lg font-medium">Reliability and Supporty</p>
            <span className="text-xs">
              e are committed to providing reliable products and exceptional
              support..
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
