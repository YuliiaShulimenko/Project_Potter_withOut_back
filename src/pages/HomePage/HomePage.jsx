import React from "react";
import Banner from "../../components/Banner/Banner";
import { useSelector } from "react-redux";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";

import s from "./HomePage.module.css";
import FormSale from "../../components/FormSale/FormSale";
import SaleRandom from "../../components/SaleRandom/SaleRandom";
import { Link } from "react-router-dom";

function HomePage() {
  const catalog = useSelector((state) => state.categories);
  const catalog_categories = catalog.slice(0, 4);

  return (
    <div>
      <Banner />

      <div className={s.catalog_container}>
        <div className={s.catalog_title}>
          <h2>Catalog</h2>
<Link to="/categories/all" >
          <div className={s.btn_all_categ}>All categories</div>
          </Link>
        </div>
        <CategoriesContainer
          categories={catalog_categories}
        />
      </div>
      <FormSale />
   
        <SaleRandom />
   
    </div>
  );
}

export default HomePage;
