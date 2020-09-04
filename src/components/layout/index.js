import React from 'react'
import appleIcon114 from 'assets/icons/apple-touch-icon-114x114.png'
import appleIcon120 from 'assets/icons/apple-touch-icon-120x120.png'
import appleIcon144 from 'assets/icons/apple-touch-icon-144x144.png'
import appleIcon152 from 'assets/icons/apple-touch-icon-152x152.png'
import appleIcon180 from 'assets/icons/apple-touch-icon-180x180.png'
import appleIcon57 from 'assets/icons/apple-touch-icon-57x57.png'
import appleIcon60 from 'assets/icons/apple-touch-icon-60x60.png'
import appleIcon72 from 'assets/icons/apple-touch-icon-72x72.png'
import appleIcon76 from 'assets/icons/apple-touch-icon-76x76.png'
import icon16 from 'assets/icons/favicon-16x16.png'
import icon32 from 'assets/icons/favicon-32x32.png'
import favicon from 'assets/icons/favicon.ico'
import msTile150 from 'assets/icons/mstile-150x150.png'
import { useMetadata } from 'hooks/metadata'
import Container from 'react-bootstrap/Container'
import Footer from './footer'
import Header from './header'
import Helmet from './helmet'
import { ThemeContext, useTheme } from './theme'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

export default function Layout({ children }) {
  const [isDarkMode, setDarkMode] = useTheme()
  const meta = useMetadata()

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      <Helmet>
        <title lang="en">{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:locale" content="en_GB" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={`@${meta.social.twitter}`} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />

        <link rel="shortcut icon" href={favicon} />
        <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57} />
        <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60} />
        <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72} />
        <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76} />
        <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114} />
        <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120} />
        <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144} />
        <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180} />
        <link rel="icon" type="image/png" href={icon16} sizes="16x16" />
        <link rel="icon" type="image/png" href={icon32} sizes="32x32" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content={msTile150} />
      </Helmet>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </ThemeContext.Provider>
  )
}
