import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonRegistration from '../../components/Registration/ButtonRegistration/ButtonRegistration'
import Modal from '../../components/Registration/Modal/Modal'

function AccountPage() {
    const [active, setActive] = useState(false)
  return (
    <div>
      <Link to='/login'>
      <ButtonRegistration title={'Авторизация / Регистрация'} color={'yellow'} onClick={() => setActive(true)}/>
      </Link>
      <Modal active={active} setActive={setActive}/>
    </div>
  )
}

export default AccountPage