import React from 'react'
import { forwardRef } from "react"
import s from './InputRegistration.module.css'

const InputRegistration = forwardRef((props, ref) => {
    return(
        <input ref={ref} {...props} className={s.input_elem}/>
    ) 
})

export default InputRegistration



// https://ru.legacy.reactjs.org/docs/forwarding-refs.html