import React from 'react';
import { useDispatch } from 'react-redux';
import { searchProductsAction } from '../../store/reducers/products_reducer';
import s from './Search.module.css';

function Search() {
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    dispatch(searchProductsAction(e.target.value));
  };

  return (
    
    <div className={s.seach}>
      <i className="fa fa-search"></i> 
      <input
        onChange={inputHandler}
        type="text"
        placeholder="Search product"
        name="search"
        className={s.input}
        
      />
    </div>
  
  );
}

export default Search;
