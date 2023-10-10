import React from "react";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import {  useSelector } from "react-redux";

import FilterForm from "../../components/FilterForms/FilterForm/FilterForm";
import SortForm from "../../components/FilterForms/SortForm/SortForm";
import DiscountCheck from "../../components/FilterForms/DiscountCheck/DiscountCheck";
import s from "./ProductsListPage.module.css";
import Search from "../../components/Search/Search";


function ProductsListPage() {
  
  const productsAll = useSelector((state) => state.allProducts);


  return (
    <div >
         <Search/>
         
      <div className={s.form}>
        <FilterForm/>
        <br />
        <DiscountCheck />
        <br />
        <SortForm />
      </div>
      <ProductsContainer products={productsAll} />

    </div>
  );
}

export default ProductsListPage;
