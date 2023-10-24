import React, { useEffect } from "react";

import HomePage from "./pages/HomePage/HomePage";
import CategoriesList from "./pages/CategoriesListPage/CategoriesListPage";
import { Route, Routes } from "react-router-dom";
import CategoryProductsPage from "./pages/CategoryProductsPage/CategoryProductsPage";

import ProductItemPage from "./pages/ProductItemPage/ProductItemPage";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage/CartPage";
import SalePage from "./pages/SalePage/SalePage";
import ProductsListPage from "./pages/ProductsListPage/ProductsListPage";

import { useDispatch } from "react-redux";

import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { getAllProducts } from "./requests/products_request";
import { getAllCategories } from "./requests/category_request";
import Login from "./pages/AccountPages/Login/Login";
import Registraition from "./pages/AccountPages/Registraition/Registraition";
import Reset from "./pages/AccountPages/Reset/Reset";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllCategories), []);
  useEffect(() => dispatch(getAllProducts), []);
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id_prod" element={<ProductItemPage />} />
        <Route path="/categories/all" element={<CategoriesList />} />
        <Route path="/categories/:id" element={<CategoryProductsPage />} />
        <Route path="/products/all" element={<ProductsListPage />} />
        <Route path="/shopping_cart" element={<CartPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Registraition />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="*" element={<NotFoundPage />} />



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
