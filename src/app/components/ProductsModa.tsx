import Image from "next/image";
import phone from '../../../assets/product14.jpeg';
import product1 from '../../../assets/product5.jpeg';
import product2 from '../../../assets/product10.jpeg';

export default function ProductsModa() {
  return (
    <div className="grid gap-4">
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src={phone.src}
          alt=""
          width={700}  // Specify the width
          height={300} // Specify the height
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={product1.src}
            alt=""
            width={150} // Specify the width
            height={150} // Specify the height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={product1.src}
            alt=""
            width={150} // Specify the width
            height={150} // Specify the height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={product1.src}
            alt=""
            width={150} // Specify the width
            height={150} // Specify the height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={product1.src}
            alt=""
            width={150} // Specify the width
            height={150} // Specify the height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={product1.src}
            alt=""
            width={150} // Specify the width
            height={150} // Specify the height
          />
        </div>
      </div>
    </div>
  );
}
