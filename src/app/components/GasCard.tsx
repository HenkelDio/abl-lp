import { Variants, motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

const cardVariants: Variants = {
  offscreen: {
    x: 100,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

type TProps = {
  image: StaticImageData,
  name: string
}

export default function GasCard({ image, name }: TProps) {
  return (
    <>
      <div className="bg-orange-0 md:h-[520px] md:w-[400px] rounded-md flex flex-col justify-center items-center relative mt-32 md:mt-0 ">
        <h2 className="relative md:top-[-80px] top-[-50px] font-bold text-xl">{name}</h2>
        <div className="md:h-[400px] h-[200px]">
          <Image src={image} alt="p20" className="w-full h-full"/>
        </div>
        <div>
        <Link href={`https://api.whatsapp.com/send?phone=5541984095429&text=Ol%C3%A1,%20gostaria%20de%20realizar%20o%20pedido%20de%20um%20g%C3%A1s%20${name}.`}>
          <button type="submit" className="text-white font-semibold md:mt-5 bg-orange-0 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:bg-orange-400 d:text-sm text-3xl md:text-xl sm:w-aut px-20 md:rounded-xl rounded-b-xl md:py-5 py-5 text-center dark:bg-orange-600 mt-5 dark:hover:bg-orange-700 dark:focus:bg-orange-600 md:absolute bottom-[-40px] left-[125px] md:left-[60px]">Fazer pedido</button>
        </Link>
        </div>
      </div>
    </>
  )
}