import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../requests/products_request";
import s from "./ProductItemPage.module.css";
import { addToCartAction } from "../../store/reducers/cart_reducer";



//   const [clicked, setClicked] = useState(false); не нужен,опустить экшн в ретерн
function ProductItemPage() {
  const { id_prod } = useParams();
  const dispatch = useDispatch();
  const base_url = "http://localhost:3333";
  const [clicked, setClicked] = useState(false);
  useEffect(() => dispatch(getProduct(id_prod)), []);
  const product = useSelector((state) => state.oneProduct);
  const { title, price, image, description, discont_price, id ,rating} = product;
  const discount = Math.floor(100 - (discont_price * 100) / price);


  const buttonText = clicked ? 'ADDED' : 'Add To Cart';
  const buttonClass = clicked ? `${s.product_btn} ${s.clicked}` : s.product_btn;


  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(addToCartAction(product));
    setClicked(true); // Устанавливаем состояние clicked в true при клике
    // alert ("Add to cart")
  };
  return (
    <div className={s.product_info}>
      <h2 className={s.product_title}>{title}</h2>

      <div className={s.product_details}>
        <div className={s.img_wrapper}>
          <img
            className={s.product_img}
            src={`${base_url}${image}`}
            alt={title}
          />
        </div>
        <div className={s.product_description}>
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
{/* <div>Rating:{rating}</div> */}
          <div
            className={buttonClass}
            //проверить чтобы в корзину прилетало правильно,тк айдишники приходят как строка и число
            onClick={clickHandler}
          >
           {buttonText}
          </div>

          <h4 className={s.product_subtitle}>Description</h4>
          <p className={s.product_text}>{description}</p>
          {/* <Link to={`/categories/${id}`}> <p>{title}</p> </Link> */}
        </div>
      </div>
    </div>
  );
}

export default ProductItemPage;
