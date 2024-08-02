import ProductsModa from "../components/ProductsModa";

export default function Moda() {
  return(
    <div className="m-auto mt-10">
      <section className="max-w-[1000px] m-auto">
        <h1 className="font-bold text-center text-4xl">Sobre a ABL MODA</h1>
        <p className="mt-6 text-gray-600 md:p-0 px-5">
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

      <section className="max-w-[700px] m-auto mt-20 md:p-0 p-5">
        <ProductsModa />
      </section>
    </div>
  )
}