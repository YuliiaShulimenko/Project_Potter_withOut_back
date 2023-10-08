import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import { getAllProducts } from '../../requests/products_request'
import FilterForm from '../../components/FilterForms/FilterForm/FilterForm'
import SortForm from '../../components/FilterForms/SortForm/SortForm'
import s from "./SalePage.module.css"
function SalePage() {

    const dispatch = useDispatch()

      useEffect(() => {
    dispatch(getAllProducts)
    window.scrollTo(0, 0);
  }, [])
    const productsAll = useSelector(state=> state.allProducts)

    const products_to_show = productsAll.filter(product => product.discont_price !== null)
  return (
    <div>
      <div className={s.filter}>
   <FilterForm />
        <br />
     
        <br />
        <SortForm />
      </div>
      
        <ProductsContainer products ={products_to_show}/>
    </div>
  )
}

export default SalePage