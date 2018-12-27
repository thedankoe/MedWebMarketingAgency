import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from './MediaQueries'

const HeadingStyle = styled.h2`
  margin-bottom: ${props => props.theme.textSpace};
  font-size: 3.2rem;
  font-weight: 300;
  text-align: center;
  span {
    font-weight: 600;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletL} {
    font-size: 2.5rem;
  }
`

const SubHeadingStyle = styled.h3`
  margin-bottom: 1rem;
  font-size: 2.2rem;
`

const ParagraphStyle = styled.p`
  color: ${props => props.theme.grey};
  font-size: 1.8rem;
`

const LinkStyle = styled(Link)`
  width: 15rem;
  margin: 0 auto;
  background: ${props => props.theme.primary};
  border-radius: 5px;
  box-shadow: ${props => props.theme.bs};
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.3s;
  &:hover {
    box-shadow: ${props => props.theme.bsHover};
    background: ${props => props.theme.primaryLight};
    transform: translateY(3px);
    svg {
      transform: translateX(0.5rem);
      transition: all ease 0.3s;
    }
  }
`

const HeaderLinkStyle = styled(LinkStyle)`
  width: 15rem;
  margin: 0;
  padding: 1rem;
  background: ${props => props.theme.secondary};
  transform: translateY(1.5rem);
  &:hover {
    background: ${props => props.theme.secondaryLight};
    transform: translateY(1.8rem);
    svg {
      transform: translateX(0);
    }
  }

  @media ${device.tabletS} {
    margin: 0 auto;
  }
`

const SecondaryLinkStyle = styled(LinkStyle)`
  margin: 1rem 0 0 0;
  background: ${props => props.theme.secondary};
  border-radius: 5px;
  &:hover {
    background: ${props => props.theme.secondaryLight};
    transform: translateY(3px);
    svg {
      transform: translateX(0.5rem);
    }
  }
`

const FeedbackLinkStyle = styled(LinkStyle)`
  width: 17rem;
  padding: 1rem;
  background: ${props => props.theme.secondary};
  transform: translateY(2.5rem);
  &:hover {
    background: ${props => props.theme.secondaryLight};
    transform: translateY(2.8rem);
  }
`

export {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  LinkStyle,
  SecondaryLinkStyle,
  FeedbackLinkStyle,
  HeaderLinkStyle,
}
