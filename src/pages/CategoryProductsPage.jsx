import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProdByCateg } from "../requests/catef_request";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";

function CategoryProductsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => 
    dispatch(getProdByCateg(id))
  , [])

  const categProductsItem = useSelector((state) => state.prodCategory);
  // const category_title = useSelector((state) => state.categories)
  

  const title = categProductsItem.category.title;
  const prodCat = categProductsItem.data;

  console.log(categProductsItem);

  return (
    <div>
      {title}
      <ProductsContainer 
      products={prodCat} 
      />
    </div>
  );
}

export default CategoryProductsPage;
