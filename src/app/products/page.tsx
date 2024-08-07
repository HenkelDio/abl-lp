import Image from "next/image";
import product1 from '../../../assets/product1.jpeg';
import product2 from '../../../assets/product2.jpeg';
import product3 from '../../../assets/product3.jpeg';
import product4 from '../../../assets/product4.jpeg';
import product5 from '../../../assets/product5.jpeg';
import product6 from '../../../assets/product6.jpeg';
import product7 from '../../../assets/product7.jpeg';
import product8 from '../../../assets/product8.jpeg';
import product9 from '../../../assets/product9.jpeg';
import product10 from '../../../assets/product10.jpeg';
import product11 from '../../../assets/product11.jpeg';
import product12 from '../../../assets/product12.jpeg';
import product13 from '../../../assets/product13.jpeg';
import product14 from '../../../assets/product14.jpeg';


export default function Products() {
  return (
    <div className="mb-10 mt-10">
      <div className="text-5xl font-bold flex justify-center items-center">
        <h1>Produtos</h1>
      </div>
      <section className="p-5 overflow-auto">
        {/* <div className="flex md:items-center md:justify-center py-4 md:py-8 md:w-auto h-auto flex-row overflow-auto">
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            Todas as categorias
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Sapatos
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Mochilas
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Eletrônicos
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Camisas
          </button>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product1.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product2.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product3.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
          </div>
          <div className="grid gap-4">
          <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product4.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product5.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product6.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
          </div>
          <div className="grid gap-4">
          <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product7.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product8.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product9.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
          </div>
          <div className="grid gap-4">
          <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product10.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product11.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div className="shadow-md rounded-md">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  product12.src
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
