import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FavorietsItem from '../FavorietsItem/FavorietsItem'

function FavouritesContainer() {
    const like= useSelector(state=> state.liked)
  
  
    useEffect(() => {
      localStorage.setItem('favourite', JSON.stringify(like));
    }, [like]);

  return (
    <div> {like.map((el) => (
            <FavorietsItem key={el.id} {...el} />
          ))}
        </div>
  )
}

export default FavouritesContainer