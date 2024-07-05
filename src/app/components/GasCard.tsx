import { Variants, motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"

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
  image: StaticImageData
}

export default function GasCard({ image }: TProps) {
  return (
    <>
      <div className="bg-orange-0 h-[520px] w-[500px] rounded-md flex flex-col justify-center items-center relative">
        <div>
          <Image src={image} alt="p20" className="relative top-[-50px]"/>
        </div>
        <div>
        <button type="submit" className="text-white font-semibold mt-5 bg-orange-0 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:bg-orange-400 rounded-lg text-sm sm:w-auto px-20 py-5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:bg-orange-600 absolute bottom-[-30px] left-[140px]">Fazer pedido</button>
        </div>
      </div>
    </>
  )
}