import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { CheckMark } from './styles/IconStyles'
import CheckoutPackage from './checkoutPackage'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  HeaderLinkStyle,
} from './styles/TextStyles'

const CardContainer = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  width: 33%;
  background: #fff;
  padding: ${props => props.theme.textSpace} 1.5rem;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  color: #000;
  :not(:last-child) {
    margin-right: ${props => props.theme.textSpace};
  }
`

const CardParagraph = styled.p`
  color: ${props => props.theme.primary};
  font-size: 2.8rem;
  font-weight: 500;
`

const CardList = styled.ul`
  margin: ${props => props.theme.textSpace} 0;
  border-radius: 3px;
  list-style: none;
  font-size: 1.8rem;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    :not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`

const CardLink = styled(HeaderLinkStyle)`
  margin: 0 auto;
`

const ServicesCard = () => (
  <CardContainer>
    <Card>
      <HeadingStyle>Basic</HeadingStyle>
      <SubHeadingStyle>
        Affordable SEO consulting for businesses that want to test if SEO will
        work for them.
      </SubHeadingStyle>
      <CardParagraph>$499/month</CardParagraph>
      <ParagraphStyle>
        Month to Month - <span>Done With You</span>
      </ParagraphStyle>
      <CardList>
        <CardList>
          <li>
            <CheckMark />
            Advanced SEO &amp; Keyword Research
          </li>
          <li>
            <CheckMark />
            Monthly Website Analysis &amp; Actionable Advice
          </li>
          <li>
            <CheckMark />
            Ongoing Website Support
          </li>
          <li>
            <CheckMark />
            Daily (weekday) Social Media Posts
          </li>
          <li>
            <CheckMark />
            Bi-Weekly Content Writing
          </li>
          <li>
            <CheckMark />
            Copywriting Advice
          </li>
          <li>
            <CheckMark />
            Monthly ROI Report
          </li>
        </CardList>
      </CardList>
      <CardLink to="/services/basic">Learn More</CardLink>
    </Card>
    <Card>
      <HeadingStyle>Standard</HeadingStyle>
      <SubHeadingStyle>
        For businesses that are tight on time that want effective online
        marketing and SEO
      </SubHeadingStyle>
      <CardParagraph>$999/month</CardParagraph>
      <ParagraphStyle>
        Month to Month - <span>Done For You</span>
      </ParagraphStyle>
      <CardList>
        <CardList>
          <li>
            <CheckMark />
            Advanced SEO &amp; Keyword Research
          </li>
          <li>
            <CheckMark />
            Website Changes From Analysis
          </li>
          <li>
            <CheckMark />
            Ongoing Website Support
          </li>
          <li>
            <CheckMark />
            Daily (weekday) Social Media Posts/Engagement
          </li>
          <li>
            <CheckMark />
            Bi-Weekly Content Writing
          </li>
          <li>
            <CheckMark />
            Advanced Copywriting for All Pages
          </li>
          <li>
            <CheckMark />
            Monthly ROI Report
          </li>
        </CardList>
      </CardList>
      <CardLink to="/services/standard">Learn More</CardLink>
    </Card>
    <Card>
      <HeadingStyle>Premium</HeadingStyle>
      <SubHeadingStyle>
        For businesses interested in effective online marketing, paid
        advertisements, and email campaigns.
      </SubHeadingStyle>
      <CardParagraph>$1999/month</CardParagraph>
      <ParagraphStyle>
        6 Month Contract - <span>Done For You</span>
      </ParagraphStyle>
      <CardList>
        <li>
          <CheckMark />
          Advanced SEO &amp; Keyword Research
        </li>
        <li>
          <CheckMark />
          Advanced Google Ads Management &amp; Reporting
        </li>
        <li>
          <CheckMark />
          Online Advertisement Management &amp; Reporting
        </li>
        <li>
          <CheckMark />
          Ongoing Website Support
        </li>
        <li>
          <CheckMark />
          Daily (weekday) Social Media Posts/Engagement
        </li>
        <li>
          <CheckMark />
          Bi-weekly Email Marketing Campaigns
        </li>
        <li>
          <CheckMark />
          Weekly Content Writing (1,200+ words)
        </li>
        <li>
          <CheckMark />
          Advanced Copywriting for All Pages
        </li>
        <li>
          <CheckMark />
          Monthly ROI Assessment
        </li>
      </CardList>
      <CardLink to="/services/premium">Learn More</CardLink>
    </Card>
  </CardContainer>
)

export default ServicesCard
