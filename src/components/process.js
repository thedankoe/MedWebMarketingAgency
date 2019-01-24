import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import {
  HeadingStyle,
  ParagraphStyle,
  SubHeadingStyle,
} from './styles/TextStyles'
import { PencilIcon } from './styles/IconStyles'

const ProcessWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;
`

const ProcessList = styled.ol`
  margin: ${props => props.theme.textSpace} 0
    ${props => props.theme.sectionSpace} 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProcessListContainer = styled.div`
  width: 60%;
  padding: 1.5rem 3rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`

const ProcessListItem = styled.li`
  text-align: left;
  font-size: 2.5rem;
  font-weight: 500;
  span {
    font-size: 2rem;
    font-weight: 400;
    display: block;
  }
`

const ProcessListIcon = styled(PencilIcon)`
  font-size: 3rem;
  margin-right: 3rem;
`

const Process = () => (
  <ProcessWrapper>
    <HeadingStyle>Our process</HeadingStyle>
    <SubHeadingStyle>
      Our team is comprised of experts in all of the services explained above,
      once a package or individual service is purchased we get to work right
      away. The sooner we get started the faster your growth starts.
    </SubHeadingStyle>
    <ProcessList>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 1
          <span>
            A package is purchased, you will get an email receipt and be
            redirected to fill out a form with your information.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 2
          <span>
            Our team will immediately get to work analyzing your website and
            social media accounts, then creating your website or accounts and
            start the optimization process.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 3
          <span>
            We start researching keywords and what your competitors are doing
            right and wrong, we correct the mistakes and implement ad campaigns.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 4
          <span>
            We produce bi-weekly content articles to ensure organic growth while
            constantly adjusting other services according to reported analytics.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 5
          <span>
            We send a detailed report detailing ROI. Depending on your package,
            we make vital changes to your web presence, run ad campaigns, and
            start building your email list.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
    </ProcessList>
    <HeadingStyle>Money Back Guarentee</HeadingStyle>
    <ParagraphStyle>
      If you aren't satisfied with your growth in the first month we give you
      your money back. Even though SEO takes well over a month to see long term
      growth, we are confident you will love our services.
    </ParagraphStyle>
  </ProcessWrapper>
)

export default Process
