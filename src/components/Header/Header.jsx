import React, { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import s from "./Header.module.css";
import logo from "../../images/54.gif";

import { Link } from "react-router-dom";
import user from "../../images/acc.gif";

import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import Modal from "../Registration/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const count = useSelector((state) => state.cart).length;
  const likes = useSelector((state) => state.liked).length;
  const [active, setActive] = useState(false)
  return (
    <div className={s.header}>
   {/* /////////// LOGO /////////// */}      
      <div className={s.img_div}>
        
       <Link to ="/"><img src={logo} alt="logo" className={s.img} /></Link> 

        <Link to="/categories/all"><div className={s.catalog}>Catalog</div></Link>
        
      </div>

      <NavLinks />
<div className={s.icons}>
  {/* /////////// LIKES-Favourites /////////// */}    
      <div className={s.hard}>
      
      <Link to="/favourites"><FontAwesomeIcon icon={faHeart} className={s.heart_icon}/></Link>
      <h4>Favourites {likes}</h4>
      
      </div>
      
     
{/* /////////// LOGIN-ACCOUNT /////////// */}
      <div className={s.accaunt}>
      <Link to='/login'>
      <img src={user} alt="user" className={s.user} onClick={() => setActive(true)}/>
      </Link>
      <Modal active={active} setActive={setActive}/>
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
