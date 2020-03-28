import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutIntro from '../components/aboutIntro'
import AboutResume from '../components/aboutResume'
import Navbar from '../components/navbar'
import Socials from '../components/socials'

const AboutPage = ({ location }) => (
  <>
    <Layout>
      <SEO title="About" />
      <Navbar pathName={location.pathname} />
      <AboutWrapper className="aboutDiv">
        <h1>Who am I?</h1>
        <AboutIntro />
        <h1>Resume</h1>
        <AboutResume />
      </AboutWrapper>
      <Socials pathName={location.pathname} />
    </Layout>
  </>
)

export default AboutPage

const AboutWrapper = styled.div`
  max-width: 960px;
  margin: 150px auto 25px;
  display: flex;
  flex-direction: column;

  h1 {
    text-shadow: var(--elevation-1);
  }
`
