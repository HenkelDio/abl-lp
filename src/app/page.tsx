'use client'

import SimpleSlider from "./components/SimpleSlider";
import MultipleItems from "./components/MultipleHeader";
import { ContactCard } from "./components/ContactCard";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";



export default function Index() {
  return (
    <div className="max-w-[1200px] m-auto mt-10">
      <section className="max-w-[1000px] m-auto">
        <h1 className="font-bold text-center text-4xl">Nossa loja</h1>
        <p className="mt-6 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore facere modi voluptate impedit sequi consequatur accusantium quas. Natus esse deleniti delectus dolorum dolore. Quasi minima itaque sint maiores sunt voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore fugiat repudiandae nemo natus delectus temporibus consequuntur. Iste, omnis distinctio dolorum at eveniet odio accusamus et dolores, suscipit iure numquam hic?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sunt nulla id iste fugit soluta. Quod, veritatis animi! Id nemo quaerat fugit voluptas iste dolores tempora harum quidem, dolor numquam?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime placeat eos laborum perferendis neque, qui fugit at necessitatibus suscipit aliquam sed consequuntur ullam temporibus assumenda repellendus quia iusto blanditiis itaque.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime placeat eos laborum perferendis neque, qui fugit at necessitatibus suscipit aliquam sed consequuntur ullam temporibus assumenda repellendus quia iusto blanditiis itaque.
        </p>
      </section>

      <section>
        <h1 className="font-bold text-center text-4xl mt-20">Produtos</h1>
        <div className="mt-6">
          <SimpleSlider />
          <MultipleItems />
        </div>
      </section>

      <section className="max-w-[1000px] m-auto mt-20">
        <h1 className="font-bold text-center text-4xl">Contato</h1>
        <div className="flex justify-center mt-10 gap-10">
          <ContactCard label="example@mail.com" title="e-mail" icon={<MdAlternateEmail/>}/>
          <ContactCard label="(41) 99999-9999" title="whatsapp" icon={<FaWhatsapp />}/>
        </div>
      </section>
     
    </div>
  )
}