import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { device } from './styles/MediaQueries'
import { HeadingStyle, ParagraphStyle } from './styles/TextStyles'

export const CASE_STUDY_QUERY = graphql`
  query {
    file(relativePath: { eq: "case-study.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const CaseWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;
`

const CaseContainer = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
`

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CaseParagraph = styled(ParagraphStyle)`
  margin-top: ${props => props.theme.textSpace};
  color: ${props => props.theme.secondary};
  font-weight: 500;
`

const CaseStudy = () => (
  <StaticQuery
    query={CASE_STUDY_QUERY}
    render={data => (
      <CaseWrapper>
        <HeadingStyle>
          How Caveman Printing increased their customer base
        </HeadingStyle>
        <CaseContainer>
          <Img fluid={data.file.childImageSharp.fluid} />
          <ParagraphContainer>
            <ParagraphStyle>
              Skip and Angie at Caveman Printing and Apparel bought their print
              shop after 30+ years of previous ownership and were looking to
              revamp their business. Long story short, they bought an expensive
              website that doesn't provide results, or have any targeted
              traffic.
            </ParagraphStyle>
            <CaseParagraph>
              After targeting a specific audience (customers in the market for
              business cards) there was a spike in growth as expected. That is a
              huge market in itself, look at VistaPrint if you don't believe us.
              With a few more strategic efforts they've experienced close to
              twice the web traffic in 6 months, this traffic consists of
              customers that WANT to consistently order from them.
            </CaseParagraph>
          </ParagraphContainer>
        </CaseContainer>
      </CaseWrapper>
    )}
  />
)

export default CaseStudy
