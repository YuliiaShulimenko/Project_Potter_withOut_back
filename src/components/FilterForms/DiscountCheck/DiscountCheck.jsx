import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { discountItemsAction } from '../../../store/reducers/products_reducer';
import s from "./DiscountCheck.module.css"

function DiscountCheck() {

    const dispatch = useDispatch()

    const [checkboxChecked,setCheckboxChecked]=useState(false);
    const handleChange= ()=> setCheckboxChecked(!checkboxChecked);


    const get_products =e=> dispatch(discountItemsAction(e.target.checked))
  return (
    <div>
        <label className={s.filter_discount_title}>Discounted items
            <input type="checkbox" checked={checkboxChecked} onChange={handleChange} onClick={get_products}/>
        </label>
    </div>
  )
}

export default DiscountCheck