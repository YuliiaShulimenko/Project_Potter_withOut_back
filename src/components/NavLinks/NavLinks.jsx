import React from 'react'
import { Link } from 'react-router-dom'
import s from "./NavLinks.module.css"


function NavLinks() {
  return (
    <div className={s.links}>
        
    <Link to="/">HOME</Link>
    <Link to="/products/all">All products</Link>
    {/* <Link to="/categories/all">All categories</Link> */}
    <Link to="/sale">Sale</Link>
    </div>
  )
}

export default NavLinks