import React from 'react'
import Map from './GoogleMap/GoogleMap'
import Contacts from '../Contacts/Contacts'

function Footer() {
  return (
    <div>
      <Contacts/>
        <Map/>
    </div>
  )
}

export default Footer