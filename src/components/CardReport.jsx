import React from 'react'
import styles from '../css_modules/CardReport.module.css'
function CardReport({ name }) {
  return (
    <div className={styles.cardReport}>
      <p>Name: {name}</p>
    </div>
  )
}

export default CardReport