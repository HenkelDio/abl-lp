import Image from "next/image";

export default function ProductsModa() {
  return (
    <div className="grid gap-4">
      <div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
          alt=""
          width={700}  // Specify the width
          height={300} // Specify the height
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
            width={150} // Specify the width
            height={150} // Specify the height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
            width={150} // Specify the width
            height={150} // Specify the height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
            width={150} // Specify the width
            height={150} // Specify the height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
            width={150} // Specify the width
            height={150} // Specify the height
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
            width={150} // Specify the width
            height={150} // Specify the height
          />
        </div>
      </div>
    </div>
  );
}