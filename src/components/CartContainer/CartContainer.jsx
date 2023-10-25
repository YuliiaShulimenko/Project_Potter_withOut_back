import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import s from "./CartContainer.module.css"
import { clearCartAction } from "../../store/reducers/cart_reducer";



function CartContainer() {
  

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

//в момент когда будет происходить обновление и монтирование компонента из-за сущности cart,будет записываться в ЛокСторидж наш стейт
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  return (
    <div>
      <div className={s.cartContainer}>
        {cart.map((el) => (
          <CartItem key={el.id} {...el} />
        ))}
      </div>
      <div className={s.clear_btn} onClick={() => dispatch(clearCartAction())}>
        Clear cart
      </div>
    
    </div>
  );
}
export default CartContainer;
