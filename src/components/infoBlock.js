import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { SubHeadingStyle, ParagraphStyle } from './styles/TextStyles'

const InfoContainer = styled.div`
  text-align: center;
`

const InfoLink = styled(Link)`
  margin-left: 1rem;
  color: ${props => props.theme.secondary};
  :hover {
    color: ${props => props.theme.secondaryLight};
  }
  svg {
    transform: translateY(3px);
  }
`

const InfoBlock = props => {
  const { icon, heading, text } = props
  return (
    <InfoContainer>
      {icon}
      <SubHeadingStyle>{heading}</SubHeadingStyle>
      <ParagraphStyle>
        {text}
        <InfoLink to="/marketing-solutions">More</InfoLink>
      </ParagraphStyle>
    </InfoContainer>
  )
}

export default InfoBlock
