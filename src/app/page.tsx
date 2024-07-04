import Card from "./components/Card";

export default function Index() {
  return (
    <>
      <section className="w-full h-[500px] px-4">
        <div className="w-full h-full bg-[url('../../assets/teste.png')] bg-fixed rounded p-2 pr-8 animate-fade-right">
          <div className="w-full h-full flex items-end justify-center flex-col animate-fade-up">
            <div className="bg-white p-4 py-10 opacity-1 rounded-md text-right flex flex-col shadow-lg">
              <h1 className="text-3xl text-black font-semibold">Empresa especializada em entregas de GLP</h1>
              <p className="mt-2 text-gray-600">Trabalhamos sempre com o melhor atendimento</p>
            </div>
            <button type="submit" className="text-white mt-5 bg-orange-0 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:bg-orange-400 font-medium rounded-lg text-sm  sm:w-auto px-20 py-5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:bg-orange-600">Fazer pedido</button>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex gap-10 justify-center p-2">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  )
}