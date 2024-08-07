import { TbBrandShopee } from "react-icons/tb";
import CardFind from "../components/CardFind";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="mb-10 mt-10">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="text-5xl font-bold text-center">
          <h1>Contato</h1>
        </div>

        <div className="px-5 md:px-0 mt-10 mb-10">
          <button
            type="submit"
            className="text-white font-semibold bg-orange-0 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:bg-orange-400 rounded-lg text-2xl md:text-sm sm:w-[300px] md:px-20 w-full py-5 text-center dark:bg-blueDefault-0 dark:hover:bg-blue-950  dark:focus:bg-blue-950 "
          >
            Entrar em contato por Whatsapp
          </button>
        </div>

        <div className="flex items-center gap-5 justify-center mb-10">
          <div className="w-[100px] h-[2px] bg-gray-600"></div>
          <p className="font-semibold text-gray-700">OU</p>
          <div className="w-[100px] h-[2px] bg-gray-600"></div>
        </div>

        <form className="flex flex-col w-[300px] gap-5" action="https://formsubmit.co/willianhenkel@gmail.com" method="POST">

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nova mensagem!"></input>

          <p className="text-center">Entre em contato por e-mail!</p>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Seu melhor e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="examplo@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Seu nome
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="examplo@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Assunto
            </label>
            <textarea
              name="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Digite o motivo do contato"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white font-semibold bg-orange-0 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:bg-orange-400 rounded-lg text-2xl md:text-sm sm:w-[300px] md:px-20 w-full py-5 text-center dark:bg-blueDefault-0 dark:hover:bg-blue-950  dark:focus:bg-blue-950"
          >
            ENVIAR
          </button>
        </form>
      </div>

      <section className="dark:bg-gray-900 m-auto mt-20 text-white p-10">
        <div className="md:max-w-[1000px] w-auto m-auto">
          <h1 className="font-bold text-center text-4xl">Onde nos encontrar</h1>
          <div className="flex gap-5 justify-center mt-5 md:flex-row flex-col">
            <CardFind icon={<FaFacebook />} title="Facebook"/>
            <CardFind icon={<FaInstagram/>} title="Instagram"/>
          </div>
        </div>
      </section>
    </div>
  );
}
