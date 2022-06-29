import React, { useContext } from 'react';
import { faMoon, faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import * as styles from './header.module.css';
import Icon from './icon';
import { ThemeContext } from './theme';

export default function Header() {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <Navbar
      expand="lg"
      className={styles.navbar}
      variant={isDarkMode ? 'dark' : 'light'}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className={styles.brand}>
            <h1>PL</h1>
          </Link>
        </Navbar.Brand>
        <div className={styles.right}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Icon
            icon={isDarkMode ? faMoon : faAdjust}
            onClick={() => setDarkMode(!isDarkMode)}
            className={styles.theme}
            style={{ visibility: isDarkMode === null ? 'hidden' : 'unset' }}
          />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.nav}>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
