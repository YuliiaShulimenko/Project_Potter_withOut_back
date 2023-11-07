import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../store/reducers/cart_reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {addToFavouritesAction } from "../../store/reducers/liked_reducer";




export default function ProductItem({ product }) {

  const [clicked, setClicked] = useState(false);
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(addToCartAction(product));
    setClicked(true);
  };

  const likedHandler = (e) => {
    e.preventDefault();
    dispatch(addToFavouritesAction(product));

    setLiked(true);
 
  };

  const { image, title, price, discont_price, id, rating } = product;

  // let text="agasgAM N KN"

  // Отображение рейтинга в звездах!!!!!!!!!!!!Доделать,не точное закрашивание
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.round(rating)) {
      stars.push(<FontAwesomeIcon icon={faStar} className={s.active} key={i} />);
    } else {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
  }

  const title_short = title.slice(0, 60) + ' ... ';
  const discount = Math.floor(((price - discont_price) / price) * 100);
  const buttonText = clicked ? 'In cart' : 'Add To Cart';
  const buttonClass = clicked ? `${s.add_btn} ${s.clicked}` : s.add_btn;

  const heartClass = liked ? `${s.heart_icon} ${s.liked}` : s.heart_icon;

  return (
    <div className={s.prodItem}>
      <Link to={`/products/${id}`}>
        <div className={s.product_image_wrapper}>
          <img
            src={`http://localhost:3333${image}`}
            alt={title}
          />
        </div>
        <div className={s.product_container}>
          <div className={s.product_price_container}>
            {discont_price ? (
              <div className={s.priceWithDisc}>
                <p className={s.discount_price}>{discont_price}$</p>
                <p className={s.price}>{price}$</p>
                <p className={s.discount}>{-discount}%</p>
              </div>
            ) : (
              
                <p className={s.price_without}>{price}$</p>
             
            )}
          </div>
          <p className={s.product_title}>
  <span>{title_short}</span>
  <span className={s.read_more}>Read more</span>
</p>
          <div className={s.rating}>Rating: {rating}/{stars}</div>
        </div>
      </Link>
      <div
        className={buttonClass}
    
        onClick={clickHandler}
     
      >
      {buttonText}
      </div>
      <div className={heartClass}>
        <FontAwesomeIcon icon={faHeart} onClick={likedHandler}/>
      </div>
      {/* <button onClick={()=>{
        text="Hello word"
      }}>ADD BTN</button>
      <h1>{text}</h1> */}
    </div>
  );
}