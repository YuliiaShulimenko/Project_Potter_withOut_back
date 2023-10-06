import React from 'react'
import s from "./NotFoundPage.module.css"
function NotFoundPage() {
  return (
    <div className={s.error}>
      <img src="https://media.giphy.com/media/eIfa2NwRhbHySSNqke/giphy.gif" alt="" />
      <div className={s.text}>
      <h2>404</h2>
      <p>Oh,no!</p>
      <p>Nothing dwells here exept here Echeveria...</p>
      </div>
    </div>
  )
}

export default NotFoundPage