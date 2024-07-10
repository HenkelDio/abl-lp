'use client'

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Card from "./components/Card";
import { IoMdMail } from "react-icons/io";
import p20 from '../../assets/p20.png';
import p45 from '../../assets/p45.png';
import GasCard from "./components/GasCard";



export default function Index() {
  return (
    <>
      <section className="w-full h-[500px]">
        <div className="w-full h-full bg-[url('../../assets/teste.png')] bg-fixed rounded p-2 pr-8 animate-fade-up bg-no-repeat bg-cover">
          <div className="w-full h-full flex items-center justify-center flex-col animate-fade-right">
            <div className="bg-white p-4 py-10 rounded-md text-center flex flex-col shadow-lg">
              <h1 className="text-3xl text-black font-bold">Empresa especializada em entregas de GLP</h1>
              <p className="mt-2 text-gray-600">Trabalhamos sempre com o melhor atendimento</p>
            </div>
            <button type="submit" className="text-white font-semibold mt-5 bg-orange-0 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:bg-orange-400 rounded-lg text-sm sm:w-auto px-20 py-5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:bg-orange-600">Fazer pedido</button>
          </div>
        </div>
      </section>
      <section className="mt-20 h-[420px]">
        <h1 className="text-center font-semibold text-2xl">Contate-nos</h1>
        <div className="flex gap-10 justify-center items-center p-2">
          <Card label="Whatsapp" description="41 98409-5429" icon={<FaWhatsapp />} />
          <div className="w-1 h-28 bg-gray-400"></div>
          <Card label="E-mail" description="cavilato@cavilato.com.br" icon={<IoMdMail  />} />
          <div className="w-1 h-28 bg-gray-400"></div>
          <Card label="Telefone" description="41 3030-3030" icon={<FaPhoneAlt />} />
        </div>
      </section>
      <section className="w-full h-[600px] max-w-[1200px] mx-auto flex gap-10 justify-center">
       <GasCard image={p45}/>
       <GasCard image={p45}/>
      </section>
      <section className="mt-10 mb-28">
        <h1 className="text-center font-semibold text-2xl mb-5">Um pouco sobre nós</h1>
        <div className="bg-orange-400 w-full h-[280px] flex justify-center items-center p-5 gap-10 font-medium text-white">
          <div className="w-[300px]">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, assumenda earum odio minima asperiores enim dolor suscipit temporibus delectus nobis, deserunt sapiente voluptatum sit debitis deleniti! Eligendi earum quo blanditiis!</p>
          </div>
          <div className="w-[300px]">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, assumenda earum odio minima asperiores enim dolor suscipit temporibus delectus nobis, deserunt sapiente voluptatum sit debitis deleniti! Eligendi earum quo blanditiis!</p>
          </div>
        </div>
      </section>
    </>
  )
}