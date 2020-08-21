import React from 'react'
import {
  faLinkedin,
  faGithub,
  faQuora,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className="d-flex justify-content-between">
        <span>Pedro © 2020</span>
        <div className={styles.icons}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pedrogilourenco/"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            href="https://github.com/plourenco"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="_blank"
            href="https://www.twitter.com/pedroglourenco"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            target="_blank"
            href="https://www.quora.com/profile/Pedro-Louren%C3%A7o-25"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faQuora} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
