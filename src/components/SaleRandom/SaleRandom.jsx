// SaleRandom.js
import React from "react";
import { useSelector } from "react-redux";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

function SaleRandom() {
  const productsAll = useSelector((store) => store.allProducts);

  // Фильтруем только продукты со скидкой
  const discountProducts = productsAll.filter(
    (product) => product.discont_price
  );

  // Генерируем 4 случайных продукта
  // const randomProducts = getRandomProducts(discountProducts, 3);

  // Функция для получения случайных продуктов
  // function getRandomProducts(arr, num) {
  //   const shuffled = [...arr].sort(() => 0.5 - Math.random());
  //   return shuffled.slice(0, num);
  // }

  const getRandomProducts = () => {
    const sale_products = [...discountProducts].sort(() => Math.random() - 0.5); //сортируем продукты со скидкой рандомным методом
    return sale_products.slice(0, 4); //обрезаем нужное кол-во,последний индекс не учитывается
  };

  const randomProducts = getRandomProducts();

  const containerStyles = {
    dispaly: "flex",
    justifyContent: "space-between",
  };

  //для того , чтобы пагинатор не отображался на главной странице,передаем потом пропсом в контейнер
  const location = "home";
  return (
    <div>
      <h2 >Sale </h2>
      {/* Передаем массив случайных продуктов в компонент ProductsContainer */}
      <ProductsContainer
        products={randomProducts}
        containerStyles={containerStyles}
        location={location}
      />
    </div>
  );
}

export default SaleRandom;
