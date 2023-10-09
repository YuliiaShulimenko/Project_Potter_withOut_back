import React from 'react'
import Map from './GoogleMap/GoogleMap'
import Contacts from '../Contacts/Contacts'
import s from "./Footer.module.css"


function Footer() {
  return (
    <div className={s.footer}>
      <Contacts/>
        <Map/>
    </div>
  )
}

export default Footer