import React from 'react'
import styled from 'styled-components'
import { SubHeadingStyle, ParagraphStyle } from './styles/TextStyles'

const InfoContainer = styled.div`
  text-align: center;
`

const InfoParagraph = styled(ParagraphStyle)`
  color: ${props => props.theme.lightGrey};
`

const InfoBlock = props => {
  const { icon, heading, text } = props
  return (
    <InfoContainer>
      {icon}
      <SubHeadingStyle>{heading}</SubHeadingStyle>
      <InfoParagraph>{text}</InfoParagraph>
    </InfoContainer>
  )
}

export default InfoBlock
