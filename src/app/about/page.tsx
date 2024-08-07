import Image from 'next/image';
import logo from '../../../assets/logo_complete.png';
import logo2 from '../../../assets/logo_complete2.png';

export default function About() {
  return (
    <div className="mb-10">
        <div className="flex md:flex-row flex-col justify-center items-top md:gap-52 gap-7 mt-10">
          <div className="flex flex-col gap-10 items-center">
            <h1 className="font-bold text-5xl">Sobre a<br></br>ABL STOCK</h1>
            <div className='flex gap-10'>
              <Image src={logo} alt="logo" width={110}/>
              <Image src={logo2} alt="logo" width={110}/>
            </div>
          </div>
          <div className="w-[400px] p-5 md:p-0">
            <p>
              A ABL STOCK é uma empresa especializada em vendas online, atuando principalmente através das plataformas Facebook e Instagram. A ABL STOCK é inovadora no segmento de vendas online, dedicada a fornecer uma experiência de compra conveniente e satisfatória para seus clientes
            </p>
            <br></br>
            <p>
              Com forte presença nas redes sociais, especialmente no Facebook e Instagram, a ABL STOCK se destaca pela oferta diversificada de produtos de varejo, atendendo a diversas necessidades e preferências dos consumidores. A empresa prioriza a qualidade dos produtos e o atendimento ao cliente, garantindo que cada compra seja uma experiência positiva
            </p>
            <br></br>
            <p>
              Através de postagens atrativas e interativas nas redes sociais, a ABL STOCK mantém seus clientes informados sobre as últimas novidades, promoções e lançamentos. Além disso, a interação direta com os consumidores por meio de comentários e mensagens privadas fortalece o relacionamento e a confiança na marca
            </p>
            <br></br>
            <p>
              Com um foco constante na inovação e na satisfação do cliente, a ABL STOCK continua a expandir seu catálogo e melhorar seus serviços, consolidando-se como uma escolha confiável e acessível no mercado de vendas online.
            </p>
          </div>
        </div>

    </div>
  )
}