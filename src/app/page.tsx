"use client";

import SimpleSlider from "./components/SimpleSlider";
import MultipleItems from "./components/MultipleHeader";
import { ContactCard } from "./components/ContactCard";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import CardFind from "./components/CardFind";
import { TbBrandShopee } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

export default function Index() {
  return (
    <div className="m-auto mt-10">
      <section className="max-w-[1000px] m-auto">
        <h1 className="font-bold text-center text-4xl">Nossa loja</h1>
        <p className="mt-6 text-gray-600 md:p-0 px-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          facere modi voluptate impedit sequi consequatur accusantium quas.
          Natus esse deleniti delectus dolorum dolore. Quasi minima itaque sint
          maiores sunt voluptas. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Inventore fugiat repudiandae nemo natus delectus
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
            <CardFind icon={<TbBrandShopee />} title="Shopee"/>
            <CardFind icon={<FaInstagram />} title="Instagram"/>
            <CardFind icon={<TbBrandShopee />} title="Shopee"/>
          </div>
        </div>
      </section>

      <section className="max-w-[1000px] m-auto mt-20">
        <h1 className="font-bold text-center text-4xl">Contato</h1>
        <div className="flex justify-center mt-10 gap-10 flex-wrap">
          <ContactCard
            label="example@mail.com"
            title="e-mail"
            icon={<MdAlternateEmail />}
          />
          <ContactCard
            label="(41) 99999-9999"
            title="whatsapp"
            icon={<FaWhatsapp />}
          />
        </div>
      </section>
    </div>
  );
}
