import GasCard from "../components/GasCard";
import p45 from '../../../assets/p45.png';

export default function Order() {
  return (
    <div className="mb-10 md:mt-20">
      <section className="w-full md:h-[600px] md:max-w-[1200px] mx-auto flex md:flex-row flex-col md:gap-10 justify-center items-center">
        <GasCard image={p45} name="P45"/>
        <GasCard image={p45} name="P20"/>
      </section>
    </div>
  )
}