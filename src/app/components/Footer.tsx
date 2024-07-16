'use client'

import OptionHeader from "./OptionHeader";
import logo from '../../../assets/logo_withot_bg.png';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-200 w-full h-[300px] p-10 relative bottom-0">
      <div className="md:flex md:flex-row flex-col gap-6 md:ml-20">
        <Image src={logo} alt="logo" className="w-56 h-56 md mb-5 md:mb-0"/>
        <div className="md:h-[200px] md:w-1 bg-gray-400"></div>
        <div className="flex gap-9">
          <OptionHeader link='/' label='Home'/>
          <OptionHeader link='/order' label='Pedir Gás'/>
          <OptionHeader link='/contact' label='Contato'/>
          <OptionHeader link='/about' label='Sobre'/>
        </div>
        <div className="md:h-[200px] md:w-1 bg-gray-400 mt-4 md:mt-0"></div>
        <div className="flex flex-col gap-5">
        <p><b>Telefone:</b> 41 98409-5429</p>
        <p><b>Email:</b> cavilato@cavilato.com.br</p>
        </div>
      </div>
    </footer>
  )
}