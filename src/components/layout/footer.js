import React from 'react';
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSocials } from 'hooks/socials';
import Container from 'react-bootstrap/Container';
import * as styles from './footer.module.css';
import Icon from './icon';

export default function Footer() {
  const socials = useSocials();
  return (
    <footer className={styles.footer}>
      <Container className="d-flex justify-content-between">
        <span>Pedro © 2024</span>
        <div className={styles.icons}>
          <a
            target="_blank"
            href={`https://www.linkedin.com/in/${socials.linkedIn}`}
            rel="noopener noreferrer"
          >
            <Icon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            href={`https://github.com/${socials.github}`}
            rel="noopener noreferrer"
          >
            <Icon icon={faGithub} />
          </a>
          <a
            target="_blank"
            href={`https://www.twitter.com/${socials.twitter}`}
            rel="noopener noreferrer"
          >
            <Icon icon={faTwitter} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
