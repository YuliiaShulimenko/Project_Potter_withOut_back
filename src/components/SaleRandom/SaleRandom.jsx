// SaleRandom.js
import React from "react";
import { useSelector } from "react-redux";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import s from "./SaleRandom.module.css"


function SaleRandom() {
  const productsAll = useSelector((store) => store.allProducts);

  // Фильтруем только продукты со скидкой
  const discountProducts = productsAll.filter(
    (product) => product.discont_price
  );


  const getRandomProducts = () => {
    const sale_products = [...discountProducts].sort(() => Math.random() - 0.5); //сортируем продукты со скидкой рандомным методом
    return sale_products.slice(0, 4); //обрезаем нужное кол-во,последний индекс не учитывается
  };

  const randomProducts = getRandomProducts();

 

  //для того , чтобы пагинатор не отображался на главной странице,передаем потом пропсом в контейнер
  const location = "home";
  return (
    <div className={s.sale}>
      <h2 >Sale </h2>
      {/* Передаем массив случайных продуктов в компонент ProductsContainer */}
      <ProductsContainer
        products={randomProducts}
     
        location={location}
      />
    </div>
  );
}

export default SaleRandom;



  // Генерируем 4 случайных продукта
  // const randomProducts = getRandomProducts(discountProducts, 3);

  // Функция для получения случайных продуктов
  // function getRandomProducts(discountProducts, num) {
  //   const sale_products = [...discountProducts].sort(() => 0.5 - Math.random());
  //   return sale_products.slice(0, discountProducts);
  // }



