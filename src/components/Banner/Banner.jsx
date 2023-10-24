import React, { useState, useRef } from "react";
import s from "./Banner.module.css"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import flowers from "../../images/102.gif";
import secondSlide from "../../images/0108.gif";
import ron from "../../images/0102.gif";
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

  // Define an array of text content corresponding to each slide
  const textContent = [
    { title: "Sale %", subTitle: "New season" },
    { title: "New collection", subTitle: "...soon" },
    { title: "Gifts", subTitle: " to new customers" },
    { title: "Wellcome!!!", subTitle: "" },
  ];

  const slides = [flowers,ron,dom, secondSlide];

  return (
    <div className={s.banner_wrapper}>
      
      <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
        {slides.map((image, index) => {
          const { title, subTitle } = textContent[index];
          return (
            <div
              className={`${s.bannerContainer} ${s[`slide${index + 1}`]}`}
              key={index}
              onClick={() => sliderRef.current.slickGoTo(index)}
            >
              <div className={s.banner_sale}>
                <div className={s.content}>
                  <h2 className={s.title}>{title}</h2>
                  <h3 className={s.sub_title}>{subTitle}</h3>
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
