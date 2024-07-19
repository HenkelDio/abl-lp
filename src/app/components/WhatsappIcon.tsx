import Image from "next/image";
import whatsappIcon from '../../../assets/whatsapp_icon.png';
import Link from "next/link";

export default function WhatsappIcon() {
  return (
    <div className="w-16 h-16 fixed bottom-6 left-6 z-50 cursor-pointer">
      <Link href="https://api.whatsapp.com/send?phone=5541984095429&text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%GLP.">
      <Image src={whatsappIcon} alt="whatsapp_icon" />
      </Link>
    </div>
  )
}