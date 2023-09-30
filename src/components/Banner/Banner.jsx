import React, { useState, useRef } from "react";
import s from "./Banner.module.css"; // Путь к вашему CSS-файлу
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import flowers from "../../images/102.gif";
import flowers from "../../images/000.png";
import ron from "../../images/10.gif";
import dom from "../../images/15.gif";
import { Link } from "react-router-dom";



function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  const slides = [flowers, ron, dom];


  return (
    <div className={s.banner_wrapper}>
      <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
        {slides.map((image, index) => {
          return (
            <div
              className={`${s.bannerContainer} ${s[`slide${index + 1}`]}`}
              key={index}
              onClick={() => sliderRef.current.slickGoTo(index)}
            >
              <div className={s.banner_sale}>
                <div className={s.content}>
                  <h1 className={s.title}>Sale %</h1>
                  <h2 className={s.sub_title}>New season</h2>
                  <Link to="/sale">
                    <div className={s.sale_btn}>SALE</div>
                  </Link>
                </div>
                <div className={s.image_box}>
                  <img src={image} alt="img" className={s.image} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className={s.dots}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${s.dot} ${activeSlide === index ? s.active : ""}`}
            onClick={() => sliderRef.current.slickGoTo(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
