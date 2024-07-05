import { motion } from "framer-motion";
import Link from "next/link";

type TProps = {
  link: string,
  label: string
}

export default function OptionHeader({ link, label }: TProps) {
  return (
    <>
       <Link href={link}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
            {label}
          </motion.div>
        </Link>
    </>
  )
}