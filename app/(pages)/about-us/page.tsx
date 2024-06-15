import React from "react"
import img from "@/public/images/about-us-img.jpg"
import Image from "next/image"
import { MailCheck, PhoneCall } from "lucide-react"

const AboutUsPage = () => {
  return (
    <section className="relative w-full">
      <Image
        src={img}
        alt="about-us-Image"
        width={100}
        height={100}
        sizes="500px"
        className="aspect-square h-[600px] w-screen rounded-lg object-cover opacity-35"
      />
      <div className="absolute top-0 mx-auto flex h-full w-full flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-6xl font-extrabold">About Us</h1>
        <p className="max-w-4xl text-wrap text-center text-sm lg:text-base">
          Welcome to Patil Computers, your one-stop destination for
          comprehensive IT solutions. We are dedicated to providing top-quality
          products and services to meet all your computing and network needs.
          Our extensive range of offerings ensures that we can cater to both
          individual users and businesses, regardless of size or industry.
        </p>
      </div>
    </section>
  )
}

export default AboutUsPage
