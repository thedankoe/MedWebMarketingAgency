import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PricingOptions from '../components/pricingOptions'
import FAQ from '../components/faq'

const PricingPage = ({ location }) => (
  <>
    <Helmet
      title="Pricing | MedWeb Marketing"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <PricingOptions />
      <FAQ />
    </Layout>
  </>
)

export default PricingPage
