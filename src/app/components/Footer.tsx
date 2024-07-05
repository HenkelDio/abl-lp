'use client'

import OptionHeader from "./OptionHeader";
import logo from '../../../assets/logo.jpg';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-200 w-full h-[300px] p-10">
      <div className="flex gap-6 ml-20">
        <Image src={logo} alt="logo" className="h-[60px]"/>
        <div className="h-[200px] w-1 bg-gray-400"></div>
        <div className="flex gap-9">
          <OptionHeader link='/' label='Home'/>
          <OptionHeader link='/' label='Gases'/>
          <OptionHeader link='/' label='Pedir Gás'/>
          <OptionHeader link='/' label='Contato'/>
          <OptionHeader link='/' label='Sobre'/>
        </div>
        <div className="h-[200px] w-1 bg-gray-400"></div>
        <div className="flex flex-col gap-5">
        <p><b>Telefone:</b> 41 99999-9999</p>
        <p><b>Email:</b> example@mail.com</p>
        </div>
      </div>
    </footer>
  )
}