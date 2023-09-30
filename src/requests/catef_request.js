import { categAllAction } from "../store/reducers/categories_reducer"
import { products_by_category_Action } from "../store/reducers/catogory_prod_reducer"




export const getAllCategories = (callback) => {
    fetch('http://localhost:3333/categories/all')
      .then(res => res.json())
      .then(json => callback(categAllAction(json)))
  }





  export const getProdByCateg = id => {
    return dispatch=>{
    fetch(`http://localhost:3333/categories/${id}`)
      .then(res => res.json())
      .then(json => dispatch(products_by_category_Action(json))  )
  }}