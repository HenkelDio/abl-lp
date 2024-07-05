'use client'

import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    display: 'none'
  },
  onscreen: {
    y: 50,
    display: 'block',
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

type IProps = {
  label: string,
  description: string,
  icon: React.ReactNode
}

export default function Card({label, description, icon}: IProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
    >
      <div className="w-80 h-auto rounded-md p-6 cursor-pointer">
        <div className="text-8xl flex justify-center">
          {icon}
        </div>
        <div className="text-center mt-7">
          <h2 className="text-2xl font-bold">{label}</h2>
          <h1 className="text-3xl">{description}</h1>
        </div>
      </div>
    </motion.div>
  )
}