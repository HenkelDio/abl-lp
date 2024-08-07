import Image from "next/image";
import whatsappIcon from '../../../assets/whatsapp_icon.png';
import Link from "next/link";

export default function WhatsappIcon() {
  return (
    <div className="w-16 h-16 fixed bottom-6 left-6 z-50 cursor-pointer">
      <Link href="https://wa.link/2rq6vl">
      <Image src={whatsappIcon} alt="whatsapp_icon" />
      </Link>
    </div>
  )
}