import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromFavouriteAction } from '../../store/reducers/liked_reducer';
import s from "./FavorietsItem.module.css"
function FavorietsItem({image,id,title,price}) {
  const url = 'http://localhost:3333';
  
  const dispatch = useDispatch();
  return (
    <div className={s.like_single}>
        <div>
            <img  src={`${url}${image}`} alt={title} />
        </div>
        <div className={s.discr}>
        <p>{title}</p>
        <p>{price}$</p>
        <span onClick={()=>dispatch(deleteFromFavouriteAction(id))}>X</span>
    </div>
    </div>
  )
}

export default FavorietsItem