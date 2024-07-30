import Image from 'next/image';
import logo from '../../../assets/logo_complete.png';
import logo2 from '../../../assets/logo_complete2.png';

export default function About() {
  return (
    <div className="mb-10">
        <div className="flex md:flex-row flex-col justify-center items-top md:gap-52 gap-7 md:mt-12">
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-5xl">Sobre a<br></br>ABL STOCK</h1>
            <div className='flex gap-10'>
              <Image src={logo} alt="logo" width={110}/>
              <Image src={logo2} alt="logo" width={110}/>
            </div>
          </div>
          <div className="w-[400px] p-5 md:p-0">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aperiam laboriosam, maiores assumenda ab temporibus delectus hic. Maiores est, non velit sapiente, quae esse deleniti officiis rerum optio voluptates expedita?
            </p>
            <br></br>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga sunt, quidem sequi assumenda numquam repudiandae totam pariatur eum ex commodi, nemo earum ipsam facilis dolorum corporis ullam, explicabo et. Praesentium?
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eum inventore animi nam sunt? Ducimus natus iusto, sunt dolore fugiat quisquam tempora unde! Maiores, nesciunt saepe ut perferendis commodi ad!
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero hic beatae eaque officia dignissimos reiciendis rerum commodi, praesentium non quidem sunt rem earum, dolores exercitationem velit voluptatum, facilis unde maxime.
            </p>
          </div>
        </div>

    </div>
  )
}