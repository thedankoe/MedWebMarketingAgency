import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { HeadingStyle, ParagraphStyle } from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const FooterWrapper = styled.footer`
  width: 100%;
  padding: ${props => props.theme.textSpace} 0;
  background: ${props => props.theme.primary};
  color: #fff;
  h2 {
    :after {
      content: '';
      height: 1px;
      width: 150px;
      margin: 1.5rem auto 0 auto;
      background: ${props => props.theme.secondaryLight};
      display: block;
    }
  }
`

const FooterContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  p {
    text-align: center;
    color: ${props => props.theme.lightGrey};
    margin-top: ${props => props.theme.textSpace};
  }
`

const FooterNavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
  list-style: none;

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`

const FooterNavItem = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  a {
    color: #fff;
    transition: ease 0.2s;
    :hover {
      color: ${props => props.theme.secondary};
    }
  }
`

const Footer = () => (
  <FooterWrapper>
    <HeadingStyle>
      <span>PrintWeb</span>Marketing
    </HeadingStyle>
    <FooterContainer>
      <nav>
        <FooterNavList>
          <FooterNavItem>
            <Link to="/services">Services</Link>
          </FooterNavItem>
          <FooterNavItem>
            <Link to="/pricing">Pricing</Link>
          </FooterNavItem>
          <FooterNavItem>
            <Link to="/about">About</Link>
          </FooterNavItem>
          <FooterNavItem>
            <Link to="/blog">Growth Tips</Link>
          </FooterNavItem>
          <FooterNavItem>
            <Link to="/contact">Contact Us</Link>
          </FooterNavItem>
        </FooterNavList>
      </nav>
      <ParagraphStyle>&copy; 2018 PrintWebMarketing</ParagraphStyle>
    </FooterContainer>
  </FooterWrapper>
)

export default Footer
