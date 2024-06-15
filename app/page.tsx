import Hero from "@/components/ui/Hero"
import Image from "next/image"
import whatsappLogo from "@/public/whatsapp.svg"
import WhyChooseUs from "@/components/ui/WhyChooseUs"
import Services from "@/components/ui/Services"
import Trust from "@/components/ui/Trust"
export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center gap-16 px-4">
      <Hero />
      {/* <div
        className="fixed left-[8%] top-[50%] cursor-pointer rounded-xl bg-white p-2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Image
          src={whatsappLogo}
          alt="wgatsappLogo"
          height={0}
          width={0}
          className="h-10 w-10 object-contain sm:h-16 sm:w-16"
        />
      </div> */}

      <WhyChooseUs />
      <Services />
      <Trust />
    </main>
  )
}
