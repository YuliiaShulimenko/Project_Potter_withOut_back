import React from "react";
import s from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  decrimentCartAction,
  deleteFromCartAction,
  incrimentCartAction,
} from "../../store/reducers/cart_reducer";

function CartItem({ id, title, price, count, discont_price, image }) {
  const dispatch = useDispatch();
  return (
    <div className={s.cart_single}>
      <img
        src={`http://localhost:3333${image}`}
        alt={title}
        className={s.cart_img}
      />

      <div className={s.info}>
        <p className={s.cart_item_title}>{title}</p>
      
      <div className={s.count}>
        <button onClick={() => dispatch(decrimentCartAction(id))}>-</button>
        <p >{count}</p>
        <button onClick={() => dispatch(incrimentCartAction(id))}>+</button>
      </div>
      </div>
     
      <h2 className={s.discount_price}>{discont_price*count ? (discont_price*count).toFixed(2) : (price*count).toFixed(2)}$</h2>
      {discont_price && <h3 className={s.price}>{price}$</h3>}
    
      <span
        className={s.close_btn}
        onClick={() => dispatch(deleteFromCartAction(id))}
      >
        X
      </span>
    </div>
  );
}

export default CartItem;
