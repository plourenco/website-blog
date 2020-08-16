import React from 'react'
import Container from 'react-bootstrap/Container'
import Footer from './footer'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
