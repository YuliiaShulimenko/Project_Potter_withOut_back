import React from "react";
import { useDispatch } from "react-redux";
import { sortProductsAction } from "../../../store/reducers/products_reducer";
import s from "./SortForm.module.css";
import { sortCategoryProductsAction } from "../../../store/reducers/catogory_prod_reducer";

function SortForm({location}) {
  const dispatch = useDispatch();
  const order = (e) => 
  // dispatch(sortProductsAction(e.target.value));
  dispatch(location === 'category_products' ? sortCategoryProductsAction(e.target.value) : sortProductsAction(e.target.value))

  
  //в качестве пейлоуда значение валью
  return (
    <div className={s.filter_sort}>
      <label >Sorted:</label>
   
      <select onInput={order} defaultValue="default">
        <option value="default">By default</option>
        <option value="title">By alphabetA-Z</option>
        <option value="price_asc">By price ASC</option>
        <option value="price_desc">By price DESC</option>
      </select>
    </div>
  );
}

export default SortForm;
