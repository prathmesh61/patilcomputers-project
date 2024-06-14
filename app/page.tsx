import Hero from "@/components/ui/Hero"
import Image from "next/image"
import whatsappLogo from "@/public/whatsapp.svg"
import WhyChooseUs from "@/components/ui/WhyChooseUs"
import Services from "@/components/ui/Services"
import Trust from "@/components/ui/Trust"
export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center gap-20 px-4">
      <Hero />
      <Image
        src={whatsappLogo}
        alt="wgatsappLogo"
        height={70}
        width={70}
        className="fixed bottom-10 right-20 object-contain"
      />
      <WhyChooseUs />
      <Services />
      <Trust />
    </main>
  )
}
