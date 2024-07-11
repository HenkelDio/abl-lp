import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Card from "../components/Card";

export default function Contact() {
  return (
    <div className="mb-10">
    <div className="flex md:flex-row flex-col justify-center items-top md:gap-64 md:mt-12">
      <div>
        <div className="bg-orange-0 md:w-[300px] md:h-[300px] h-[200px] text-5xl font-bold flex md:justify-end justify-center items-center">
          <h1 className="relative md:right-[-100px]">Nossos <br></br>contatos</h1>
        </div>
       <div className="px-5 md:px-0">
        <button type="submit" className="text-white font-semibold mt-5 bg-orange-0 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:bg-orange-400 rounded-lg text-2xl md:text-sm sm:w-[300px] md:px-20 w-full py-5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:bg-orange-600">Entrar em contato por Whatsapp</button>
       </div>
      </div>
      <div>
        <div className="flex-col gap-10 justify-center items-center p-2">
          <Card label="Whatsapp" description="41 98409-5429" icon={<FaWhatsapp />} />
          <div className="h-1 bg-gray-400"></div>
          <Card label="E-mail" description="cavilato@cavilato.com.br" icon={<IoMdMail  />} />
          <div className="h-1 bg-gray-400"></div>
          <Card label="Telefone" description="41 3030-3030" icon={<FaPhoneAlt />} />
        </div>
      </div>
    </div>
  </div>
  )
}