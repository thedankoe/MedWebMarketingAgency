import React from 'react'
import styled from 'styled-components'
import {
  ChartIcon,
  ArrowIcon,
  ZoomIcon,
  PencilIcon,
  TargetIcon,
  SocialIcon,
  RightIcon,
} from './styles/IconStyles'
import { device } from './styles/MediaQueries'
import { SubHeadingStyle, ParagraphStyle, PlainLink } from './styles/TextStyles'

const ServicesWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.sectionSpace} auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

const ServicesSubHeading = styled(SubHeadingStyle)`
  display: flex;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
`

const ServicesParagraph = styled(ParagraphStyle)`
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

const ServicesSection = () => (
  <ServicesWrapper>
    <div>
      <ServicesSubHeading>
        <ChartIcon /> Conversion centered websites
      </ServicesSubHeading>
      <ServicesParagraph>
        Drag and drop websites (Wix, Squarespace, etc.) don't always work as
        some would expect, as with anything that comes out of the box.
      </ServicesParagraph>
      <ServicesParagraph>
        Our websites are custom made for YOUR business: the right colors,
        functionality, call to actions, and on page SEO.
      </ServicesParagraph>
    </div>
    <div>
      <ServicesSubHeading>
        <ArrowIcon /> Google Ads (PPC)
      </ServicesSubHeading>
      <ServicesParagraph>
        Climbing the google ranks takes time, Google Ads put you right at the
        top depending on the users keyword choice. A percentage of your monthly
        cost will go towards us optimizing this.
      </ServicesParagraph>
      <ServicesParagraph>
        In the beginning stages this could be extremely helpful for lead
        generation
      </ServicesParagraph>
    </div>
    <div>
      <ServicesSubHeading>
        <ZoomIcon /> Local SEO
      </ServicesSubHeading>
      <ServicesParagraph>
        SEO consulting has grown exponentially recently because business owners
        are realizing how necessary it is for growth, the only downside is how
        time consuming it can be.
      </ServicesParagraph>
      <ServicesParagraph>
        We streamline the process and optimize every small piece of it for your
        needs.
      </ServicesParagraph>
    </div>
    <div>
      <ServicesSubHeading>
        <PencilIcon /> Content Writing
      </ServicesSubHeading>
      <ServicesParagraph>
        Creating the right content will keep you at the top of Google's
        rankings, targeted content will consistently attract customers.
      </ServicesParagraph>
      <ServicesParagraph>
        With the print industry being as big as it is, business owners like you
        have a HUGE opportunity to grow using targeted content.
      </ServicesParagraph>
    </div>
    <div>
      <ServicesSubHeading>
        <TargetIcon /> Online Advertisements
      </ServicesSubHeading>
      <ServicesParagraph>
        There are a plethora of online advertisements available to anyone, why
        not efficiently use all of them? The person that just searched for
        "business cards near me" or "screen printer" could have never seen your
        business, we don't want that.
      </ServicesParagraph>
      <ServicesParagraph>
        This is included in your monthly cost. Don't miss another customer,
        start now.
      </ServicesParagraph>
    </div>
    <div>
      <ServicesSubHeading>
        <SocialIcon /> Social Media
      </ServicesSubHeading>
      <ServicesParagraph>
        This is a given, nearly EVERY PERSON is on some form of social media.
        Imagine having the opportunity to pass by the eyes of many customers in
        your area, this is what a well targeted post does.
      </ServicesParagraph>
      <ServicesParagraph>
        Let us catch the eyes of a future customer for you.
      </ServicesParagraph>
    </div>
  </ServicesWrapper>
)

export default ServicesSection
