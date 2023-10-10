
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterProductsAction } from '../../../store/reducers/products_reducer';
import s from "./FilterForm.module.css";
import { filterCategoryProductsAction } from '../../../store/reducers/catogory_prod_reducer';

function FilterForm() {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { min, max } = e.target.form;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
     //в качестве пейлоуда обект с мин и макс занчениями

    dispatch(filterCategoryProductsAction({ min_value, max_value }))
    dispatch  ( filterProductsAction({ min_value, max_value }))
  
    
  };

  return (
    <div className={s.filter_price}>
      <label>Price</label>
      <form className={s.form}>
        <input type="number" placeholder='min' name='min' onChange={handleInputChange} />
        <input type="number" placeholder='max' name='max' onChange={handleInputChange} />
      </form>
    </div>
  );
}

export default FilterForm;
