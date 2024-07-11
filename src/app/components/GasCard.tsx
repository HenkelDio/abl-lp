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
      <div className="bg-orange-0 md:h-[520px] md:w-[500px] w-[400px] rounded-md flex flex-col justify-center items-center relative mt-40 md:mt-0 py-4">
        <h2 className="relative top-[-80px] font-bold text-xl">{name}</h2>
        <div>
          <Image src={image} alt="p20" className="relative md:top-[-50px] top-[-70px]"/>
        </div>
        <div>
        <Link href={`https://api.whatsapp.com/send?phone=5541984095429&text=Ol%C3%A1,%20gostaria%20de%20realizar%20o%20pedido%20de%20um%20g%C3%A1s%20${name}.`}>
          <button type="submit" className="text-white font-semibold md:mt-5 bg-orange-0 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:bg-orange-400 rounded-lg md:text-sm text-3xl sm:w-auto px-20 md:py-5 py-7 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:bg-orange-600 md:absolute bottom-[-30px] left-[125px]">Fazer pedido</button>
        </Link>
        </div>
      </div>
    </>
  )
}