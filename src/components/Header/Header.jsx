import React, { useState } from "react";

import s from "./Header.module.css";
import logo from "../../images/54.gif";
import { Link } from "react-router-dom";
import user from "../../images/acc.gif";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons"; 

function Header() {
  const count = useSelector((state) => state.cart).length;
  const likes = useSelector((state) => state.liked).length;
  const [menuActive, setMenuActive] = useState(false);

  const burger_list = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "All products", link: "/products/all" },
    { id: 3, title: "All sales", link: "/sale" },
    { id: 4, title: "Categories", link: "/categories/all" },
    { id: 5, title: "Cart", link: "/shopping_cart" },
    { id: 6, title: "Account", link: "/login" },
    { id: 7, title: "Favourites", link: "/favourites" },
  ];

  return (
    <div className={s.header}>
      {/* /////////// LOGO /////////// */}
      <div className={s.img_div}>
        <Link to="/">
          <img src={logo} alt="logo" className={s.img} />
        </Link>

        <Link to="/categories/all">
        <div className={s.catalog}>Catalog</div>
        </Link>


            <FontAwesomeIcon
            icon={faBars}
            size="sm"
            style={{ color: "#4ba983" }}
            className={ s.burger}
            onClick={() => setMenuActive(!menuActive)}
          />

<div className={menuActive ? s.mobile_menu_active : s.mobile_menu}>
        <ul className={s.mobile_menu_list}>
          {burger_list.map(elem =><li><Link to={elem.link} key={elem.id}><li onClick={() => setMenuActive(!menuActive)}>{elem.title}</li></Link></li> )}
        </ul>
      </div>
      
          
      </div>

      <div className={s.links}>
        <Link to="/">HOME</Link>
        <Link to="/products/all">ALL PRODUCTS</Link>
        <Link to="/sale">SALE</Link>
      </div>
      <div className={s.icons}>
        {/* /////////// LIKES-Favourites /////////// */}
        <div className={s.hard}>
          <Link to="/favourites">
            <FontAwesomeIcon icon={faHeart} className={s.heart_icon} />
          </Link>
          <h4>Favourites {likes}</h4>
        </div>

        {/* /////////// LOGIN-ACCOUNT /////////// */}
        <div className={s.accaunt}>
          <Link to="/login">
            <img src={user} alt="user" className={s.user} />
          </Link>

          <h4>Account</h4>
        </div>

        {/* /////////// CART /////////// */}
        <div className={s.cart}>
          <Link to="/shopping_cart">
            <FontAwesomeIcon icon={faCartArrowDown} className={s.cartIcon} />
            <h4>Cart {count}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
