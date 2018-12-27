import React from 'react'
import styled from 'styled-components'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const LeadSectionWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.sectionSpace} auto;

  @media ${device.laptopL} {
    width: 95%;
  }
`

const LeadSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;

  @media ${device.tablet} {
    flex-direction: column;
  }
`

const LeadSectionItem = styled.div`
  :not(:last-child) {
    margin-right: ${props => props.theme.textSpace};
  }

  @media ${device.tablet} {
    margin-right: 0;
    :not(:last-child) {
      margin-bottom: ${props => props.theme.textSpace};
    }
  }

  @media ${device.tabletS} {
    text-align: center;
  }
`

const LeadHeading = styled(HeadingStyle)`
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;
  }
`

const LeadSection = () => (
  <LeadSectionWrapper>
    <LeadHeading>
      Our <span>marketing strategies</span> and{' '}
      <span>conversion centered websites</span> guarentee long term growth to
      our clients
    </LeadHeading>
    <LeadSectionContainer>
      <LeadSectionItem>
        <SubHeadingStyle>
          300% average increase in leads for the first year
        </SubHeadingStyle>
        <ParagraphStyle>
          Marketing and SEO are heavily neglected in the modern market. Some
          leads come naturally from the technology that already exists, but
          targeted content is by far the best way to consitently increase the
          amount of leads coming in.
        </ParagraphStyle>
      </LeadSectionItem>
      <LeadSectionItem>
        <SubHeadingStyle>
          3x web traffic increase for the first year
        </SubHeadingStyle>
        <ParagraphStyle>
          Online advertisements make more website just a click away, but at a
          cost. 10-20% of your monthly payments will go towards us optimizing
          and creating targeted ads to jumpstart traffic. That is only the
          beginning of traffic.
        </ParagraphStyle>
      </LeadSectionItem>
    </LeadSectionContainer>
  </LeadSectionWrapper>
)

export default LeadSection
