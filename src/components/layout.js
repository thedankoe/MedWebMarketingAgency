/* eslint quotes: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './header'
import Footer from './footer'
import { device } from './styles/MediaQueries'

const theme = {
  primaryDark: '#035975',
  primary: '#035975',
  primaryLight: '#1EC5FF',
  secondary: '#E07124',
  secondaryLight: '#FF6800',
  black: '#004040',
  gradientLightGrey: '201f1f',
  gradientDarkGrey: '3e3e3e',
  grey: '#333',
  lightGrey: '#DDD',
  success: '#55C57A',
  warning: '#FF7730',
  maxWidth: '62%',
  bs: '0 10px 18px 1px rgba(0, 0, 0, 0.2)',
  bsHover: '0 5px 10px 1px rgba(0, 0, 0, 0.3)',
  ts: '0px 3px 8px rgba(0,0,0,0.3)',
  sectionSpace: '10rem',
  textSpace: '4rem',
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Raleway, sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Raleway:300,400,600,700');
    font-weight: 400;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media ${device.laptop} {
      font-size: 56.25%;
    }
    @media ${device.mobileL} {
      font-size: 50%;
    }
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.7;
    font-family: Raleway, sans-serif;
  }
  a {
    font-family: Raleway, sans-serif;
    text-decoration: none;
  }
  button {  font-family: Raleway, sans-serif; }
  ::selection {
    color: #fff;
    background: ${props => props.theme.secondaryLight};
  }
`

const Layout = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
