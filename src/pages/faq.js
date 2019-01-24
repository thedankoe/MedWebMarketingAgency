import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import FAQ from '../components/faq'

const FAQPage = ({ location }) => (
  <>
    <Helmet
      title="FAQ | PrintWebMarketing"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <FAQ />
    </Layout>
  </>
)

export default FAQPage
