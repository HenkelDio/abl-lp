'use client'

import { motion, Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export default function Card() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
    >
      <motion.div variants={cardVariants}>
      <div className="w-80 h-96 rounded-md p-6">
        <div className="text-8xl flex justify-center">
          <FaWhatsapp />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Whatsapp</h2>
          <h1 className="text-3xl">41 99999-9999</h1>
        </div>
      </div>
      </motion.div>
    </motion.div>
  )
}