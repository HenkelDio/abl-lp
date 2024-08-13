"use client";

import SimpleSlider from "./components/SimpleSlider";
import MultipleItems from "./components/MultipleHeader";
import { ContactCard } from "./components/ContactCard";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import CardFind from "./components/CardFind";
import { TbBrandShopee } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

export default function Index() {
  return (
    <div className="m-auto mt-10">
      <section className="max-w-[1000px] m-auto">
        <h1 className="font-bold text-center text-4xl">Nossa loja</h1>
        <p className="mt-6 text-gray-600 md:p-0 px-5 text-xl text-center">
          A ABL STOCK é uma empresa especializada em <b>vendas online</b>, atuando principalmente através das plataformas Facebook e Instagram. A ABL STOCK é inovadora no segmento de vendas online, dedicada a fornecer uma experiência de compra conveniente e satisfatória para seus clientes
        </p>
      </section>

      <section className="max-w-[1200px] m-auto">
        <h1 className="font-bold text-center text-4xl mt-20">Produtos</h1>
        <div className="mt-6 md:p-0 px-6">
          <SimpleSlider />
          <MultipleItems />
        </div>
      </section>

      <section className="dark:bg-gray-900 m-auto mt-20 text-white md:p-10 p-5">
        <div className="md:max-w-[1000px] m-auto w-full">
          <h1 className="font-bold text-center text-4xl">Onde nos encontrar</h1>
          <div className="flex gap-5 justify-center mt-5 md:flex-row flex-col">
          <CardFind icon={<FaFacebook />} title="Facebook" path="https://www.facebook.com/profile.php?id=61561372899259"/>
          <CardFind icon={<FaInstagram/>} title="Instagram" path="https://www.instagram.com/abl.stock/?fbclid=IwZXh0bgNhZW0CMTEAAR10DbJpdt71yf5eZwGu7AgLU_VPqGroyN1O_AmKBP9njtljo57t07X4uDc_aem_uIDjX4dTOVubzf8L4bQJjA"/>
          </div>
        </div>
      </section>

      <section className="max-w-[1000px] m-auto mt-20">
        <h1 className="font-bold text-center text-4xl">Contato</h1>
        <div className="flex justify-center mt-10 gap-10 flex-wrap">
          <ContactCard
            label="ablstock@ablstock.com"
            title="e-mail"
            icon={<MdAlternateEmail />}
          />
          <ContactCard
            label="(41) 99682-0318"
            title="whatsapp"
            icon={<FaWhatsapp />}
          />
        </div>
      </section>
    </div>
  );
}
