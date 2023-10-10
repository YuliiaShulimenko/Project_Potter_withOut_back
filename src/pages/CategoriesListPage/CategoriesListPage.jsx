import React from "react";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";
import {  useSelector } from "react-redux";


function CategoriesList() {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <CategoriesContainer categories={categories} />
    </div>
  );
}

export default CategoriesList;
