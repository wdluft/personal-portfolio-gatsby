import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutIntro from '../components/aboutIntro'

const AboutPage = () => (
  <>
    <Layout>
      <SEO title="About" />
      <AboutWrapper className="aboutDiv">
        <AboutIntro />
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
`
