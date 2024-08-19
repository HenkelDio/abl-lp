import Image from "next/image";

// @ts-ignore: Disables TypeScript type checking for the next line
const importAll = (r: __WebpackModuleApi.RequireContext) => {
  const images: { [key: string]: any } = {}; // Define o tipo correto para o objeto images
  r.keys().forEach((item: string) => {
    const key = item.replace('./', ''); // Remove './' do início da chave
    images[key] = r(item);
  });
  return Object.values(images);
};

const images = Array.from(
  new Set(
    importAll(
      // @ts-ignore: Ignora o erro do TypeScript relacionado ao 'require.context'
      require.context('../../../assets/products', false, /\.(jpeg|jpg|png|gif)$/)
    )
  )
);

const ProductCard = ({ imageSrc }: { imageSrc: string }) => (
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
          {images.map((image: any, index: number) => (
            <ProductCard imageSrc={image.default.src} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
