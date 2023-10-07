import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { discountItemsAction } from '../../../store/reducers/products_reducer';
import s from "./DiscountCheck.module.css"
import { discountCategoryItemsAction } from '../../../store/reducers/catogory_prod_reducer';

function DiscountCheck({location}) {

    const dispatch = useDispatch()

    const [checkboxChecked,setCheckboxChecked]=useState(false);
    const handleChange= ()=> setCheckboxChecked(!checkboxChecked);


    const get_products =e=> 
    dispatch(location === 'category_products' ? discountCategoryItemsAction(e.target.checked) : discountItemsAction(e.target.checked))
  return (
    <div>
        <label className={s.filter_discount_title}>Discounted items
            <input type="checkbox" checked={checkboxChecked} onChange={handleChange} onClick={get_products}/>
        </label>
    </div>
  )
}

export default DiscountCheck