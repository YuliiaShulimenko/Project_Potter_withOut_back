import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { discountCategoryItemsAction } from '../../../store/reducers/catogory_prod_reducer';
import s from './DiscountCheck.module.css';
import { discountItemsAction } from '../../../store/reducers/products_reducer';

function DiscountCheck() {
  const dispatch = useDispatch();
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleChange = () => setCheckboxChecked(!checkboxChecked);

  const get_products = (e) => {
 

    dispatch(discountCategoryItemsAction(e.target.checked))
    dispatch (discountItemsAction(e.target.checked))
  };

  return (
    <div>
      <label className={s.filter_discount_title}>
        Discounted items
        <input
          type="checkbox"
          checked={checkboxChecked}
          onChange={handleChange}
          onClick={get_products}
        />
      </label>
    </div>
  );
}

export default DiscountCheck;
