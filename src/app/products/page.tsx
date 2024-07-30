import Image from "next/image";

export default function Products() {
  return (
    <div className="mb-10 mt-10">
      <div className="text-5xl font-bold flex justify-center items-center">
        <h1>Produtos</h1>
      </div>
      <section className="p-5">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
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
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                }
                alt=""
                width={500} // Add appropriate width
                height={500} // Add appropriate height
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={
                  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
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
