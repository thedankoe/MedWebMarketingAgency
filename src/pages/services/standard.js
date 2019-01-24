import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../../components/layout'
import ContactImg from '../../images/marketing-contact-bg.jpg'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from '../../components/styles/TextStyles'
import CheckoutPackage from '../../components/checkoutPackage'

export const PackageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${props => props.theme.sectionSpace} 0;
  background-image: linear-gradient(
      to right bottom,
      rgba(62, 62, 62, 0.8),
      rgba(32, 32, 32, 0.8)
    ),
    url(${ContactImg});
  background-position: center;
  background-size: cover;
  color: #fff;
`

export const PackageContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
`

export const PackageParagraph = styled(ParagraphStyle)`
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.lightGrey};
  border-radius: 3px;
`

export const PackageBuyWrapper = styled.div`
  width: 80rem;
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;
`

const StandardPage = ({ location }) => (
  <>
    <Helmet
      title="Standard Package | PrintWebMarketing"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <PackageWrapper>
        <HeadingStyle>All of your SEO needs done for you</HeadingStyle>
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
            <SubHeadingStyle>Website Changes</SubHeadingStyle>
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
            <SubHeadingStyle>Social media posts and engagement</SubHeadingStyle>
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
            <SubHeadingStyle>Advanced copywriting</SubHeadingStyle>
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
