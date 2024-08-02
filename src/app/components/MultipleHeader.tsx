import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shoe from '../../../assets/shoe3.jpg';
import shoe2 from '../../../assets/shoe2.jpg';

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="w-full h-auto max-w-full">
    <Slider {...settings}>
      <div className="flex justify-center items-center md:h-[500px] h-[200px]">
        <div
          className="rounded-3xl w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${shoe.src})` }}
        />
      </div>
      <div className="flex justify-center items-center md:h-[500px] h-[200px]">
        <div
          className="rounded-3xl w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${shoe2.src})` }}
        />
      </div>
    </Slider>
  </div>
  );
}

export default MultipleItems;
