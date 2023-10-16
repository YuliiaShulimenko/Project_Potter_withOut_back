import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { getAllProducts } from "../../requests/products_request";
import FilterForm from "../../components/FilterForms/FilterForm/FilterForm";
import SortForm from "../../components/FilterForms/SortForm/SortForm";
import s from "./SalePage.module.css";
import Search from "../../components/Search/Search";



function SalePage() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts),[]);
  const productsAll = useSelector((state) => state.allProducts);

  const products_to_show = productsAll.filter(
    (product) => product.discont_price !== null
  );
  return (
    <div>
      <Search />

      <div className={s.form}>
        <FilterForm />
        <br />

        <SortForm />
      </div>
      <ProductsContainer products={products_to_show} />
    </div>
  );
}

export default SalePage;
