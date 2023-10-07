import React, { useEffect } from "react";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../requests/catef_request";

function CategoriesList() {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <CategoriesContainer categories={categories} />
    </div>
  );
}

export default CategoriesList;
