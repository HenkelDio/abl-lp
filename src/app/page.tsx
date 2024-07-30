"use client";

import SimpleSlider from "./components/SimpleSlider";
import MultipleItems from "./components/MultipleHeader";
import { ContactCard } from "./components/ContactCard";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Index() {
  return (
    <div className="m-auto mt-10">
      <section className="max-w-[1000px] m-auto">
        <h1 className="font-bold text-center text-4xl">Nossa loja</h1>
        <p className="mt-6 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          facere modi voluptate impedit sequi consequatur accusantium quas.
          Natus esse deleniti delectus dolorum dolore. Quasi minima itaque sint
          maiores sunt voluptas. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Inventore fugiat repudiandae nemo natus delectus
          temporibus consequuntur. Iste, omnis distinctio dolorum at eveniet
          odio accusamus et dolores, suscipit iure numquam hic? Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Eveniet, sunt nulla id
          iste fugit soluta. Quod, veritatis animi! Id nemo quaerat fugit
          voluptas iste dolores tempora harum quidem, dolor numquam? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Maxime placeat eos
          laborum perferendis neque, qui fugit at necessitatibus suscipit
          aliquam sed consequuntur ullam temporibus assumenda repellendus quia
          iusto blanditiis itaque. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Maxime placeat eos laborum perferendis neque, qui
          fugit at necessitatibus suscipit aliquam sed consequuntur ullam
          temporibus assumenda repellendus quia iusto blanditiis itaque.
        </p>
      </section>

      <section className="max-w-[1200px] m-auto">
        <h1 className="font-bold text-center text-4xl mt-20">Produtos</h1>
        <div className="mt-6">
          <SimpleSlider />
          <MultipleItems />
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Nós vendemos o que você precisa
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis vitae voluptas quis perspiciatis molestiae fuga et velit nam optio. Consequuntur quas fugiat unde ipsa excepturi amet vero laudantium laboriosam!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Entre em contato
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
            >
              Produtos
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[1000px] m-auto mt-20">
        <h1 className="font-bold text-center text-4xl">Contato</h1>
        <div className="flex justify-center mt-10 gap-10">
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
