import Hero from "@/components/ui/Hero"
import Image from "next/image"
import whatsappLogo from "@/public/whatsapp.svg"
export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center p-6">
      <Hero />
      <Image
        src={whatsappLogo}
        alt="wgatsappLogo"
        height={70}
        width={70}
        className="absolute bottom-0 right-16 object-contain"
      />
    </main>
  )
}
