


import React from 'react';
import s from './Contacts.module.css';
import instagram from "../../images/5.png"
import whatsApp from "../../images/6.png"


export default function Contacts() {
    const instagramURL = 'https://www.instagram.com/startainstitute/';
  return (
    <div className={s.contacts_inner}>
      <div className={s.wrapper}>
        <div className={s.contact}>
          <h3 className={s.title}>Contact</h3>
          <a href="tel:+499999999999" className={s.phone_number}>+49 999 999 99 99 </a>
          <div className={s.social}>
            <div>
            <a href={instagramURL} >
           <img src={instagram} alt="instagram" /> </a>
              <p>Instagram</p>
            </div>
            <div>
            <img src={whatsApp} alt="whatsApp" />
              <p>WhatsApp</p>
            </div>
          </div>
        </div>
        <div className={s.address}>
          <h3 className={s.title}>Address</h3>
          <a 
            className={s.link}
            href="https://tel-ran.de/" 

          >Linkstraße 2, 8 OG, 10785, Berlin, Deutschland </a>
          <p className={s.address_p1}>Working Hours:</p>
          <p className={s.address_p2}>24 hours a day</p>
        </div>
      </div>
    </div>
  )
}
