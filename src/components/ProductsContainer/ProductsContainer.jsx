import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import s from "./ProductsContainer.module.css";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../requests/products_request";
import Pagination from "../Pagination/Pagination";





///////////////////////////////////////////////////////////////////////
//-ПОСТАРАТЬСЯ УСПЕТЬ ОБЪЕДЕНИТЬ РЕДЬЮСЕРЫ ПРОДУКТС И ПРОДУКТС БАЙ КАТ//
function ProductsContainer({ products, location }) {
  products = products.filter(
    (el) => el.showByKeyWord && el.show_product && el.sale_products
  );
  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllProducts), []);

  const [crntPage, setCrntPage] = useState(1); //текущая страница
  const [countTodosPage, setCountTodosPage] = useState(16); //количество карточек на странице

  const lastElem = crntPage * countTodosPage; //индекс последнего элемента
  const firstElem = lastElem - countTodosPage; //индекс первого элемента
  const todosPageList = products.slice(firstElem, lastElem); //не делаем -1 тк метод слайс обрезает не учитывая индекс последнего элемент
  const countElem = Math.ceil(products.length / countTodosPage); //округление с запасом. Для того чтобы сделать кнопочки страниц

  return (
    <div className={s.main}>
      <div className={s.products_container} >
        {todosPageList.map((el) => (
          <ProductItem key={el.id} product={el} />
        ))}
      </div>
      <div className={s.paginator}>
        {location !== "home" && location !== "category_products" && (
          <Pagination
            setCrntPage={setCrntPage}
            countElem={countElem}
            crntPage={crntPage}
            products={products}
          />
        )}
      </div>
    </div>
  );
}

export default ProductsContainer;
