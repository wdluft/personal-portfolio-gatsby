import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutIntro from '../components/aboutIntro'
import AboutResume from '../components/aboutResume'

const AboutPage = () => (
  <>
    <Layout>
      <SEO title="About" />
      <AboutWrapper className="aboutDiv">
        <h1>Who am I?</h1>
        <AboutIntro />
        <h1>Resume</h1>
        <AboutResume />
      </AboutWrapper>
    </Layout>
  </>
)

export default AboutPage

const AboutWrapper = styled.div`
  max-width: 960px;
  margin: 100px auto 100px;
  display: flex;
  flex-direction: column;

  h1 {
    text-shadow: var(--elevation-1);
  }
`
