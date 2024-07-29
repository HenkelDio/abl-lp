'use client'

import OptionHeader from "./OptionHeader";
import logo from '../../../assets/logo.png';
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blueDefault-0 w-full p-10 mt-20 relative bottom-0 text-white">
      <div className="md:flex md:flex-row flex-col gap-6 md:ml-20">
       

        <div className="mr-20">
          <Image src={logo} alt="logo" className="w-[100px]"/>
          <div className="flex gap-2 text-3xl items-center mt-5">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
          </div>
        </div>

        <div className="flex flex-col gap-2 mr-20">
          <p className="font-bold text-lg">ABL STOCK</p>
          <OptionHeader link='/' label='Home'/>
          <OptionHeader link='/order' label='Produtos'/>
          <OptionHeader link='/contact' label='Contato'/>
          <OptionHeader link='/about' label='Sobre'/>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">ABL MODA</p>
          <OptionHeader link='/' label='Home'/>
        </div>
      </div>
    </footer>
  )
}