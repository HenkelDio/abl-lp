import { FaFacebook, FaInstagram } from "react-icons/fa";
import CardFind from "../components/CardFind";
import ProductsModa from "../components/ProductsModa";

export default function Moda() {
  return(
    <div className="m-auto mt-10">
      <section className="max-w-[1000px] m-auto">
        <h1 className="font-bold text-center text-4xl">Sobre a ABL MODA</h1>
        <p className="mt-6 text-gray-600 md:p-0 px-5 text-lg">
          Somos a divisão especializada da <b>ABL STOCK</b>, dedicados exclusivamente à venda de sapatos femininos. Nosso objetivo é oferecer a você uma experiência de compra excepcional, onde estilo, conforto e qualidade estão sempre em primeiro lugar
        </p>
        <br></br>
        <p className="mt-6 text-gray-600 md:p-0 px-5">
          Na ABL MODA, você encontrará uma ampla seleção de calçados, desde os modelos mais casuais e confortáveis até os mais elegantes e sofisticados. Nossas coleções são cuidadosamente escolhidas para garantir que você esteja sempre em sintonia com as últimas tendências da moda
          Nossa presença ativa no Facebook e Instagram permite que você veja todos os detalhes dos nossos produtos através de postagens visualmente atraentes. Além disso, estamos sempre disponíveis para responder suas dúvidas e receber seu feedback, pois a sua satisfação é a nossa prioridade.
        </p>
          <br></br>
          <p className="mt-6 text-gray-600 md:p-0 px-5">
          Escolher a ABL MODA é optar por uma experiência de compra única, onde cada par de sapatos é pensado para atender às suas necessidades e superar suas expectativas. Descubra o prazer de caminhar com estilo e conforto. Venha conhecer nossas coleções e permita que a ABL MODA faça parte do seu dia a dia!
          </p>
      </section>

      {/* <section className="max-w-[700px] m-auto mt-20 md:p-0 p-5">
        <ProductsModa />
      </section> */}

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
  )
}