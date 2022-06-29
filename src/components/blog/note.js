import React from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Icon from '../layout/icon';
import * as styles from './note.module.css';

export default function Note({ color, children }) {
  const _color = ['warning', 'danger', 'success'].includes(color)
    ? color
    : 'alert';
  return (
    <div className={`${styles[_color]}`}>
      <Icon icon={faExclamationCircle} />
      <div className={styles.text}>{children}</div>
    </div>
  );
}
