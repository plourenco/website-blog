import React from 'react'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './note.module.scss'

export default function Note({ color, children }) {
  const _color = ['warning', 'danger'].includes(color) ? color : 'alert'
  return (
    <div className={`${styles[_color]}`}>
      <FontAwesomeIcon icon={faExclamationCircle} />
      <div className={styles.text}>{children}</div>
    </div>
  )
}
