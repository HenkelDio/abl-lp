import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phone from '../../../assets/product2.jpeg';
import product1 from '../../../assets/product5.jpeg';
import product2 from '../../../assets/product10.jpeg';

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "black", opacity: 0.8, borderRadius: 10 }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="w-full h-auto max-w-full">
      <Slider {...settings}>
        <div className="flex justify-center items-center md:h-[500px] h-[300px]">
          <div
            className="rounded-3xl w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${phone.src})` }}
          />
        </div>
        <div className="flex justify-center items-center md:h-[500px] h-[300px]">
          <div
            className="rounded-3xl w-full h-full bg-cover  bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${product2.src})` }}
          />
        </div>
      </Slider>
    </div>
  );
}
