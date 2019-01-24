import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
} from '../../components/styles/TextStyles'
import CheckoutPackage from '../../components/checkoutPackage'
import {
  PackageWrapper,
  PackageContainer,
  PackageParagraph,
  PackageBuyWrapper,
} from './standard'

const StandardPage = ({ location }) => (
  <>
    <Helmet
      title="Basic Package | PrintWebMarketing"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <PackageWrapper>
        <HeadingStyle>
          The most affordable SEO consulting on the market
        </HeadingStyle>
        <PackageContainer>
          <div>
            <SubHeadingStyle>Advanced SEO and Keyword Research</SubHeadingStyle>
            <PackageParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </PackageParagraph>
          </div>
          <div>
            <SubHeadingStyle>Website Analysis</SubHeadingStyle>
            <PackageParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </PackageParagraph>
          </div>
          <div>
            <SubHeadingStyle>Ongoing website support</SubHeadingStyle>
            <PackageParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </PackageParagraph>
          </div>
          <div>
            <SubHeadingStyle>Social media posts</SubHeadingStyle>
            <PackageParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </PackageParagraph>
          </div>
          <div>
            <SubHeadingStyle>Content writing</SubHeadingStyle>
            <PackageParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </PackageParagraph>
          </div>
          <div>
            <SubHeadingStyle>Copywriting advice</SubHeadingStyle>
            <PackageParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </PackageParagraph>
          </div>
          <div>
            <SubHeadingStyle>Monthly ROI report</SubHeadingStyle>
            <PackageParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </PackageParagraph>
          </div>
        </PackageContainer>
        <PackageBuyWrapper>
          <HeadingStyle>Start your growth</HeadingStyle>
          <PackageParagraph>
            This is a recurring monthly bill, you can cancel at anytime. Do keep
            in mind that SEO shows its best results with 6 or more months of
            work.
          </PackageParagraph>
          <PackageParagraph>
            After purchase you will be redirected to a form to submit
            information needed for us to start working.
          </PackageParagraph>
          <CheckoutPackage plan="plan_EJVLrIPaulZOtP" />
        </PackageBuyWrapper>
      </PackageWrapper>
    </Layout>
  </>
)

export default StandardPage
