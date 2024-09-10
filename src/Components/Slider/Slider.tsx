import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import promocaoImage1 from '../../Assets/promo1.png';
import promocaoImage2 from '../../Assets/promo2.png';
import promocaoImage3 from '../../Assets/promo3.png';

// Componentes de setas personalizadas
const NextArrow: React.FC<any> = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <SlArrowRight />
    </div>
  );
};

const PrevArrow: React.FC<any> = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <SlArrowLeft />
    </div>
  );
};

const images = [
  {
    id: 1,
    src: promocaoImage1,
    alt: "Image 1",
  },
  {
    id: 2,
    src: promocaoImage2,
    alt: "Image 2",
  },
  {
    id: 3,
    src: promocaoImage3,
    alt: "Image 3",
  },
];

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,  // Seta para avançar
    prevArrow: <PrevArrow />,  // Seta para recuar
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="carousel-slide">
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
