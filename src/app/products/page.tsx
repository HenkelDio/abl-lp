import Image from "next/image";

// Função para importar todas as imagens e garantir que sejam únicas
const importAll = (r) => {
  return [...new Set(r.keys().map(r))];
};

// Importa as imagens da pasta especificada
const images = importAll(
  require.context('../../../assets/products', false, /\.(jpeg|jpg|png|gif)$/)
);

const ProductCard = ({ imageSrc }) => (
  <div className="shadow-md rounded-md">
    <Image
      className="h-auto max-w-full rounded-lg"
      src={imageSrc}
      alt="Produto"
      width={500} // Largura padrão
      height={500} // Altura padrão
    />
  </div>
);

export default function Products() {
  return (
    <div className="mb-10 mt-10">
      <div className="text-5xl font-bold flex justify-center items-center">
        <h1>Produtos</h1>
      </div>
      <section className="p-20 overflow-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <ProductCard imageSrc={image.default.src} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
