// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import s from "./ValidationCatdForm.module.css";
// import visaLogo from "../../images/visa.png";
// import masterCardLogo from "../../images/MasterCard.png";

// function ValidationCardForm (){
//   const { handleSubmit, control, reset, formState: { errors } } = useForm();
//   const [cardType, setCardType] = useState(null);

//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };

//   const handleCardNumberChange = (e) => {
//     const cardNumber = e.target.value;
//     if (cardNumber.startsWith('4')) {
//       setCardType('Visa');
//     } else if (cardNumber.startsWith('5')) {
//       setCardType('MasterCard');
//     } else {
//       setCardType(null);
//     }
//   };

//   return (
//     <div className={s.cardForm}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Имя владельца карты:</label>
//           <Controller
//             name="cardHolderName"
//             control={control}
//             defaultValue=""
//             rules={{ required: 'Введите имя владельца карты' }}
//             render={({ field }) => <input {...field} />}
//           />
//           {errors.cardHolderName && <div className="error">{errors.cardHolderName.message}</div>}
//         </div>

//         <div className={s.cardInput}>
//           <label>Номер карты:</label>
//           <Controller
//             name="cardNumber"
//             control={control}
//             defaultValue=""
//             rules={{
//               required: 'Введите номер карты',
//               pattern: {
//                 value: /^[0-9]+$/,
//                 message: 'Номер карты должен содержать только цифры',
//               },
//             }}
//             render={({ field }) => (
//               <>
//                 <input
//                   {...field}
//                   value={field.value || ''}
//                   onChange={handleCardNumberChange}
//                   type="text" // Изменим тип на text
//                 />
//                 {cardType === 'Visa' && <img className={s.cardLogo} src={visaLogo} alt="Visa" />}
//                 {cardType === 'MasterCard' && <img className={s.cardLogo} src={masterCardLogo} alt="MasterCard" />}
//               </>
//             )}
//           />

//           {errors.cardNumber && (
//             <div className="error">{errors.cardNumber.message}</div>
//           )}
//         </div>

//         <div>
//           <label>CVV2:</label>
//           <Controller
//             name="cvv2"
//             control={control}
//             defaultValue=""
//             rules={{
//               required: 'Введите CVV2',
//               pattern: {
//                 value: /^[0-9]+$/,
//                 message: 'CVV2 должен содержать только цифры',
//               },
//             }}
//             render={({ field }) => <input {...field} />}
//           />
//           {errors.cvv2 && <div className="error">{errors.cvv2.message}</div>}
//         </div>

//         <button type="submit">Оплатить</button>
//       </form>
//     </div>
//   );
// };

// export default ValidationCardForm;
