"use client"
import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

// sliders images
import image1 from "@/public/images/sliderImg-1.jpg"
import image2 from "@/public/images/sliderImg-2.jpg"
import image3 from "@/public/images/sliderImg-3.jpg"
import Image from "next/image"
const Hero = () => {
  return (
    <Carousel className="w-full" autoPlay infiniteLoop transitionTime={300}>
      <div className="relative w-full">
        <Image
          alt="image1"
          src={image1}
          width={200}
          sizes="500px"
          className="h-[800px] object-cover opacity-40"
        />
        <div
          className="absolute left-[50%] top-[50%] flex flex-col items-center gap-4"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <h2 className="text-wrap text-4xl font-extrabold">
            Security, Surveillance & Managed IT Services Provider
          </h2>
          <p className="text-lg font-medium">
            A guide to introduce Patil computers
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          alt="image2"
          src={image2}
          width={200}
          sizes="500px"
          className="h-[800px] object-cover opacity-40"
        />

        <div
          className="absolute left-[50%] top-[50%] flex flex-col items-center gap-4"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <h2 className="text-wrap text-4xl font-extrabold">
            We offer a full spectrum of IT, Networking and Security services.
          </h2>
          <p className="text-lg font-medium">
            A guide to introduce Expert Tech Group
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          alt="image3"
          src={image3}
          width={200}
          sizes="500px"
          className="h-[800px] object-cover opacity-40"
        />

        <div
          className="absolute left-[50%] top-[50%] flex flex-col items-center gap-4"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <h2 className="text-wrap text-4xl font-extrabold">
            IT Service provider across all public and private sectors.
          </h2>
          <p className="text-lg font-medium">
            A guide to introduce Expert Tech Group
          </p>
        </div>
      </div>
    </Carousel>
  )
}

export default Hero
