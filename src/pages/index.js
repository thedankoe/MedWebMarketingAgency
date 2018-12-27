import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import InfoSection from '../components/infoSection'
import AnalysisSection from '../components/analysisSection'
import BlogSection from '../components/blogSection'
import LeadSection from '../components/leadSection'
import { HeadingStyle } from '../components/styles/TextStyles'
import { device } from '../components/styles/MediaQueries'

import Layout from '../components/layout'

const InfoPageHeading = styled(HeadingStyle)`
  width: ${props => props.theme.maxWidth};
  margin-top: ${props => props.theme.sectionSpace};
  margin-left: auto;
  margin-right: auto;
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;
  }
`

const InfoEnd = styled.h3`
  margin-top: ${props => props.theme.textSpace};
  margin-bottom: ${props => props.theme.sectionSpace};
  font-size: 2.2rem;
  text-align: center;
  color: ${props => props.theme.secondary};

  @media ${device.tabletS} {
    width: 95%;
  }
`

const IndexPage = ({ location }) => (
  <>
    <Helmet
      title="Home | MedWeb Marketing"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <InfoPageHeading>
        We are experts at helping <span>medical specialists</span> get more
        customers through the following marketing efforts
      </InfoPageHeading>
      <InfoSection />
      <InfoEnd>
        We focus on getting you customers, so you can focus on running your
        business
      </InfoEnd>
      <AnalysisSection />
      <LeadSection />
      <BlogSection />
    </Layout>
  </>
)

export default IndexPage
