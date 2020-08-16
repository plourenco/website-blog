import React from 'react'
import { Link } from 'gatsby'
import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import styles from './header.module.scss'

export default class Header extends React.Component {
  render() {
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
        </Container>
      </Navbar>
    )
  }
}
