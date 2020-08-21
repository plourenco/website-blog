import React, { useContext } from 'react'
import { faMoon, faAdjust } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import styles from './header.module.scss'
import { ThemeContext } from './theme'

export default function Header() {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext)

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand>
          <Link to="/" className={styles.brand}>
            <h1>PL</h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faAdjust}
          onClick={() => setDarkMode(!isDarkMode)}
          className={styles.theme}
        />
      </Container>
    </Navbar>
  )
}
