import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllCategories } from '../../requests/catef_request'
import CategoryItem from '../CategoryItem/CategoryItem'
import s from "./CategoriesContainer.module.css"

function CategoriesContainer({categories,style}) {
  // const dispatch = useDispatch();
  
  // useEffect(() => dispatch(getAllCategories),[]);

    // const categories = useSelector(state=>state.categories)

  return (
    <div className ={s.container} style={style}>
       {
        categories.map(el=><CategoryItem key={el.id} {...el}/>)
       }
    </div>
  )
}

export default CategoriesContainer