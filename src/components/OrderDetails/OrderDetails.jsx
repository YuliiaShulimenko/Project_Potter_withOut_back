import React from 'react';
import { useSelector } from 'react-redux';
import s from './OrderDetails.module.css';
import { send_order } from '../../requests/post_request';
// import ValidationCardForm from '../ValidationCatdForm/ValidationCatdForm';


export default function OrderDetails() {
  const cart_state = useSelector((state) => state.cart);
  
  const total = cart_state.reduce((acc, { price, discont_price, count }) => {
    const itemPrice = discont_price || price; // Используем discont_price, если он есть, иначе price
    return acc + itemPrice * count;
  }, 0);

  const roundedTotal = total.toFixed(2);

  const submit = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.phone.value;

    // Проверка номера телефона по регулярному выражению
    const phonePattern = /^\+[0-9]{11,}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert('Incorrect phone number format');
      return;
    }

    // Отправка заказа
    //вызываем без диспатча тк мы просто отправляем данные, без отрисовки где-то вдальнейшем
    send_order(phoneNumber);
    e.target.reset();
  };

  return (
    <div className={s.order}>
      <h2 className={s.order_title}>Order details</h2>
      <div className={s.order_sum}>
        <p className={s.order_text}>Total</p>
        <p className={s.order_amount}>
          {roundedTotal}
          <span> $</span>
        </p>
   
      </div>


      <form onSubmit={submit}>
        <input
          className={s.input}
          type="tel"
          placeholder="Phone number"
          name="phone"
          pattern={'\\+[0-9]{11,}'} //  маска для валидации номера телефона
          required
        />
        <button className={s.btn}>Order</button>
      </form>
      {/* <div>
        <ValidationCardForm/>
      </div> */}
    
    </div>
  );
}


//value: /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/,