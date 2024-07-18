'use client'

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Card from "./components/Card";
import { IoMdMail } from "react-icons/io";
import P20 from '../../assets/P20.png';
import GasCard from "./components/GasCard";
import Link from "next/link";



export default function Index() {
  return (
    <>
      <section className="w-full h-[500px]">
        <div className="w-full h-full bg-[url('../../assets/teste.png')] bg-fixed rounded p-2 md:pr-8 animate-fade-up bg-no-repeat bg-cover">
          <div className="w-full h-full flex items-center justify-center flex-col animate-fade-right">
            <div className="bg-white p-4 py-10 rounded-md text-center flex flex-col shadow-lg">
              <h1 className="text-3xl text-black font-bold">Empresa especializada em entregas de GLP</h1>
              <p className="mt-2 text-gray-600">Trabalhamos sempre com o melhor atendimento</p>
            </div>
            <Link href="https://api.whatsapp.com/send?phone=5541984095429&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido%20de%20g%C3%A1s.">
              <button type="submit" className="text-white font-semibold mt-5 bg-orange-0 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:bg-orange-400 rounded-lg md:text-sm text-md sm:w-auto md:px-20 px-32 py-5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:bg-orange-600">Fazer pedido</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="md:w-full md:h-[500px] md:max-w-[1200px] mx-auto flex-col flex md:flex md:flex-row md:gap-10 justify-center items-center md:mt-24">
       <GasCard image={P20} name="P20"/>
       <GasCard image={P20} name="P40"/>
      </section>
      <section className="mt-40 md:h-[420px]">
        <h1 className="text-center font-semibold text-2xl">Contate-nos</h1>
        <div className="flex-col md:flex md:flex-row gap-10 justify-center items-center p-2 px-7">
          <Card label="Whatsapp" description="41 98409-5429" icon={<FaWhatsapp />} />
          <div className="md:w-1 md:h-28 h-1 bg-gray-400"></div>
          <Card label="E-mail" description="cavilato@cavilato.com.br" icon={<IoMdMail  />} />
          <div className="md:w-1 md:h-28 h-1 bg-gray-400"></div>
          <Card label="Telefone" description="41 3030-3030" icon={<FaPhoneAlt />} />
        </div>
      </section>
      <section className="mt-20 mb-20">
        <h1 className="text-center font-semibold text-2xl mb-5">Um pouco sobre nós</h1>
        <div className="bg-orange-400 w-full flex justify-center items-start p-5 gap-10 font-medium text-white">
          <div className="w-[300px]">
            <p>Fundada em 2001, a Gás Cavilato se dedica a fornecer soluções de gás com excelência e confiabilidade. Com mais de duas décadas de experiência no mercado, temos orgulho em ser revendedores autorizados da Supergasbras há mais de 10 anos, uma das marcas mais respeitadas no setor.</p>
          </div>
        </div>
      </section>
    </>
  )
}