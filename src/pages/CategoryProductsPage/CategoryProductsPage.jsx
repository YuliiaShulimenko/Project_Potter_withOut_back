import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProdByCateg } from "../../requests/catef_request";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import FilterForm from "../../components/FilterForms/FilterForm/FilterForm";
import DiscountCheck from "../../components/FilterForms/DiscountCheck/DiscountCheck";
import SortForm from "../../components/FilterForms/SortForm/SortForm";
import s from "./CategoryProductsPage.module.css"
import { allProdAction } from "../../store/reducers/products_reducer";
import { products_by_category_Action } from "../../store/reducers/catogory_prod_reducer";


function CategoryProductsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdByCateg(id))
    return () => {
      dispatch(products_by_category_Action({category: {}, data: []}))
    }
  }, []);

  const categProductsItem = useSelector((state) => state.prodCategory);
  // const category_title = useSelector((state) => state.categories)

  const title = categProductsItem.category.title;
  const prodCat = categProductsItem.data;
   const location ='category_products'
  // console.log(categProductsItem);

  return (
    <div>
      <h2 className={s.title}>{title}</h2>
     
      <div className={s.form}>
        <FilterForm location={location}/>
        <br />
        <DiscountCheck 
        location={location}/>
        <br />
        <SortForm location={location}/>
      </div>
      <ProductsContainer products={prodCat} location={location}
      />
    </div>
  );
}

export default CategoryProductsPage;
