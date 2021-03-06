import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import GrowthTipsBlog from '../components/growthTips'
import { HeadingStyle } from '../components/styles/TextStyles'
import Layout from '../components/layout'

const BlogPageHeading = styled(HeadingStyle)`
  margin-top: ${props => props.theme.sectionSpace};
  margin-bottom: ${props => props.theme.textSpace};
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;
  }
`

const BlogPage = ({ location }) => (
  <>
    <Helmet
      title="Blog | PrintWebMarketing"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <BlogPageHeading>Expert advice on growing your business</BlogPageHeading>
      <GrowthTipsBlog />
    </Layout>
  </>
)

export default BlogPage
