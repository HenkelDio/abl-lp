import Image from "next/image";
import whatsappIcon from '../../../assets/whatsapp_icon.png';

export default function WhatsappIcon() {
  return (
    <div className="w-16 h-16" style={{ position: "fixed", zIndex: '1000'}}>
      <Image src={whatsappIcon} alt="whatsapp_icon" />
    </div>
  )
}