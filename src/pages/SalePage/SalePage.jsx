import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import { getAllProducts } from '../../requests/products_request'

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
        <ProductsContainer products ={products_to_show}/>
    </div>
  )
}

export default SalePage