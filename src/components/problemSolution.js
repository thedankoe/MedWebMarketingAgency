import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from './styles/MediaQueries'
import { HeadingStyle, ParagraphStyle, ProblemLink } from './styles/TextStyles'
import { CaseWrapper } from './caseStudy'
import { CheckMark, RightIcon } from './styles/IconStyles'
import LeadSection from './leadSection'
import InfoSection from './infoSection'

const ProblemContainer = styled.div`
  padding: ${props => props.theme.textSpace} 0;
`

const WrapperBlue = styled(CaseWrapper)`
  width: 100%;
  margin: 0;
  padding: ${props => props.theme.textSpace} 0;
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.primaryLight},
    ${props => props.theme.primary}
  );
  color: #fff;
`

const ProbContainerBlue = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

const ParagraphOrange = styled(ParagraphStyle)`
  margin-top: ${props => props.theme.textSpace};
  color: ${props => props.theme.secondary};
  font-weight: 500;
`

const ParagraphBlue = styled(ParagraphStyle)`
  color: #fff;
  margin-bottom: ${props => props.theme.textSpace};
`

const ParagraphBlueBold = styled(ParagraphStyle)`
  color: #fff;
  margin: ${props => props.theme.textSpace} 0;
  font-weight: 500;
`

const ProblemList = styled.ul`
  width: 70%;
  margin: 0 auto ${props => props.theme.textSpace} auto;
  padding: ${props => props.theme.textSpace} 1.5rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProblemListItem = styled.li`
  font-size: 2rem;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

const ProblemSolution = () => (
  <>
    <CaseWrapper>
      <ProblemContainer>
        <HeadingStyle>Customer inconsistency kills</HeadingStyle>
        <ParagraphStyle>
          We've all been there, you put in a little extra effort for a new
          customer and they end up being a once off, but hey thats business
          right? Wrong, customers need a reason to come back, and sometimes they
          won't come back unless you wave something in front of their face.
        </ParagraphStyle>
        <ParagraphOrange>
          The main concern is large clients, the ones that bring in the most
          cash.
        </ParagraphOrange>
      </ProblemContainer>
    </CaseWrapper>
    <WrapperBlue>
      <ProbContainerBlue>
        <HeadingStyle>Large clients aren't finding you</HeadingStyle>
        <ParagraphBlue>
          There are big customers out there, a ton of them, waiting to
          consistently spend their money on print advertising, invoices,
          business cards, etc. What happens when they are looking to spend their
          money and they skip you because:
        </ParagraphBlue>
        <ProblemList>
          <ProblemListItem>
            <CheckMark />
            <span>Your site doesn't show up</span>
          </ProblemListItem>
          <ProblemListItem>
            <CheckMark />
            <span>
              They find your website but click away after a 3 second load time
            </span>
          </ProblemListItem>
          <ProblemListItem>
            <CheckMark />
            <span>Your social media accounts don't display what they want</span>
          </ProblemListItem>
          <ProblemListItem>
            <CheckMark />
            <span>Your ads don't even show up for them</span>
          </ProblemListItem>
          <ProblemListItem>
            <CheckMark />
            <span>Your competitor just sent them a discount code</span>
          </ProblemListItem>
        </ProblemList>
        <ProblemLink to="/services">
          In the market for a website?
          <RightIcon />
        </ProblemLink>
      </ProbContainerBlue>
    </WrapperBlue>
    <LeadSection />
    <WrapperBlue>
      <HeadingStyle>How we can help</HeadingStyle>
      <InfoSection />
      <ParagraphBlueBold>
        Our services get your business on the map and keep it there. Not
        convinced yet?
      </ParagraphBlueBold>
      <ProblemLink to="/services">
        Here's more detail on our services
        <RightIcon />
      </ProblemLink>
    </WrapperBlue>
  </>
)

export default ProblemSolution
