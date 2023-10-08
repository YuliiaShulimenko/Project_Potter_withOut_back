import { oneProdAction } from "../store/reducers/product_item_reducer"
import { allProdAction } from "../store/reducers/products_reducer"

export const getAllProducts = (dispatch) => {
    fetch('http://localhost:3333/products/all')
      .then(res => res.json())
      .then(json => dispatch(allProdAction(json)))
  }

  export const getProduct = id_prod => {
    return dispatch=>{
    fetch(`http://localhost:3333/products/${id_prod}`)
      .then(res => res.json())
      .then(json => dispatch(oneProdAction(json[0]))  )
  }}