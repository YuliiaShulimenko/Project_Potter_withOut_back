// import React from 'react'
// import s from "./FormSale.module.css"
// import form_img from "../../images/321.gif"
// import { send_sale } from '../../requests/post_request';

// function FormSale() {

//   const submit = (e) => {
//     e.preventDefault();
//     const phoneNumber = e.target.phone.value;

//     // Проверка номера телефона по регулярному выражению
//     const phonePattern = /^\+[0-9]{11,}$/;
//     if (!phonePattern.test(phoneNumber)) {
//       alert('Incorrect phone number format');
//       return;
//     }

//     // Отправка заказа
//     //вызываем без диспатча тк мы просто отправляем данные, без отрисовки где-то вдальнейшем
//     send_sale(phoneNumber);
//     e.target.reset();
//     alert('CHECK MASSAGE WITH DISCOUNT ON YOUR PHONE')
//   };


//   return (
//     <div className={s.form_home}>
//       <div className={s.discount_left}>
//         <img src={form_img} alt='dwarf' className={s.discount_img} />
//       </div>
//       <div className={s.discount_right}>
//         <p className={s.discount_title}>5% off </p>
//         <p className={s.discount_subtitle}>on the first order</p>

//         <form className={s.form} onSubmit={submit}>
//           <input type={'tel'}
//             placeholder={'+49'}
//             name={'phone'}/>
//             <button type='text' className={s.form_btn}>Get a discount</button>
//         </form>

//       </div>
//     </div>
//   )
// }

// export default FormSale




import React, { useState } from 'react';
import s from "./FormSale.module.css";
import form_img from "../../images/321.gif";
import { send_sale } from '../../requests/post_request';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function FormSale() {
  const [alertInfo, setAlertInfo] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.phone.value;

    // Проверка номера телефона по регулярному выражению
    const phonePattern = /^\+[0-9]{11,}$/;
    if (!phonePattern.test(phoneNumber)) {
      // Show an error alert
      setAlertInfo({ severity: 'error', message: 'Incorrect phone number format' });
      return;
    }

    // Отправка заказа
    // Вызываем без диспатча, так как мы просто отправляем данные, без отрисовки где-то в будущем
    send_sale(phoneNumber);
    e.target.reset();

    // Show a success alert
    setAlertInfo({ severity: 'success', message: 'CHECK MESSAGE WITH DISCOUNT ON YOUR PHONE' });
  };

  return (
    <div className={s.form_home}>
      <div className={s.discount_left}>
        <img src={form_img} alt='dwarf' className={s.discount_img} />
      </div>
      <div className={s.discount_right}>
        <p className={s.discount_title}>5% off</p>
        <p className={s.discount_subtitle}>on the first order</p>

        <form className={s.form} onSubmit={submit}>
          <input type={'tel'}
            placeholder={'+49'}
            name={'phone'} />
          <button type='text' className={s.form_btn}>Get a discount</button>
        </form>

        {alertInfo && (
          <Stack sx={{marginTop:"15px", width:"250px", marginLeft:"220px"}}>
            <Alert variant="filled" severity={alertInfo.severity} sx={{fontSize:"8px", borderRadius:"15px"}}>
              {alertInfo.message}
            </Alert>
          </Stack>
        )}
      </div>
    </div>
  )
}

export default FormSale;
