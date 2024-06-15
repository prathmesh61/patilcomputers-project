import Image from "next/image"
import React from "react"
import img from "@/public/images/service-page-img.jpg"
import Services from "@/components/ui/Services"
const ServicesPage = () => {
  return (
    <section className="relative h-full w-full">
      <div className="absolute top-0 z-10 mx-auto flex h-[600px] w-full flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-4xl font-extrabold lg:text-6xl">Our Services</h1>
        <p className="max-w-4xl text-wrap text-center text-sm lg:text-base">
          At Patil Computers, we offer a wide range of IT solutions tailored to
          meet the diverse needs of our clients. Whether you're an individual
          looking for a reliable laptop or a business in need of advanced
          networking equipment, our extensive selection of products and services
          ensures you have everything you need to succeed. Our commitment to
          quality, reliability, and customer satisfaction sets us apart as a
          trusted partner in the tech industry.
        </p>
      </div>
      <Image
        src={img}
        alt="about-us-Image"
        width={100}
        height={100}
        sizes="500px"
        className="aspect-square h-[600px] w-screen rounded-lg object-cover opacity-35"
      />
      <div className="mt-5">
        <Services />
      </div>
    </section>
  )
}

export default ServicesPage
