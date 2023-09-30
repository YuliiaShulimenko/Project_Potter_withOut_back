import React from 'react'
import s from "./FormSale.module.css"
import form_img from "../../images/321.gif"

function FormSale() {
  return (
    <div className={s.form_home}>
      <div className={s.discount_left}>
        <img src={form_img} alt='dwarf' className={s.discount_img} />
      </div>
      <div className={s.discount_right}>
        <p className={s.discount_title}>5% off </p>
        <p className={s.discount_subtitle}>on the first order</p>

        <form className={s.form}>
          <input type={'tel'}
            placeholder={'+49'}
            name={'phone'}/>
            <button type='text' className={s.form_btn}>Get a discount</button>
        </form>

      </div>
    </div>
  )
}

export default FormSale





