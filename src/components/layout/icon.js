import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from './theme';

export default function Icon(props) {
  const { isDarkMode } = useContext(ThemeContext);

  return <FontAwesomeIcon inverse={isDarkMode} {...props} />;
}
