import React from 'react'
import styles from './style.module.css'

function Calendar() {
  return (
    <div className={styles.container}>
      <h1>Hi! Choose an available date below to set up an appointment!</h1>

      <div className={styles.content}>
        <img
          src="https://images.unsplash.com/photo-1600992045264-136a22de917e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="housing"
        />
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/aereli/real-estate-meeting"
          style={{ minWidth: `420px`, height: `630px` }}
        />
      </div>
    </div>
  )
}

export default Calendar
