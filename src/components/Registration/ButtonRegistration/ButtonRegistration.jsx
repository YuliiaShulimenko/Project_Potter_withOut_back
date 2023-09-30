import React from 'react'
import s from "./ButtonRegistration.module.css"

function ButtonRegistration(props) {

  const { title, color, ...otherProps } = props

  return (
      <button {...otherProps} className={`${s.button_elem} ${s[color]}`}>
          {title}
    
      </button>
  )
}

export default ButtonRegistration

