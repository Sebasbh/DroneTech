import React, { useContext, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getDron } from '../../Context/UserProvider';
import './Header.css'
import { Link } from 'react-router-dom';

export function ProductSlider() {
  const { data } = useContext(getDron)
  const CustomPrevArrow = (props) => (
    <div className="custom-prev-arrow" onClick={props.onClick}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className="custom-next-arrow" onClick={props.onClick}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='main-slider'>
      <h3 className='slider-title'>Quizás te interese...</h3>
      <Slider className="Slider" {...settings}>
        {data.map((dron) => (
          <div className="cards slick-slide">
            <div className="cards-top">
              <Link className='divlink' to={`/detail/${dron.id}`}><img className="imgslide" src={dron.image} alt="img" /></Link>
              <div className='name-price'>
              <h5>{dron.name}</h5>
              <h4>{dron.price}€</h4>
              </div>           
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
