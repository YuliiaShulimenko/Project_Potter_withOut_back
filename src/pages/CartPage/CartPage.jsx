import React from 'react'
import CartContainer from '../../components/CartContainer/CartContainer'
import { Link } from 'react-router-dom'
import s from "./CartPage.module.css"



import OrderDetails from '../../components/OrderDetails/OrderDetails'
import { useSelector } from 'react-redux'

function CartPage() {
  const cart = useSelector(store => store.cart)

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart))
// },[cart])
    
  return (
    <div className='container'>
      <div className={s.main}>
      <h2 className={s.title}>Shopping cart</h2>

        <Link to="/products/all">
        <p className={s.back_link}>Back to the store  </p>
        </Link>
       
        <div className={s.cart_list_container}>
        {cart.length !== 0 ? <CartContainer/>:
         <p className={s.text}>Your Cart Is Empty!</p>}
        <OrderDetails/>
    </div>

    </div>
    </div>
  )
}

export default CartPage