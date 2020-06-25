import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutIntro from '../components/about-page/aboutIntro'
import AboutResume from '../components/about-page/aboutResume'
import Navbar from '../components/navbar'
import Socials from '../components/socials'
import ProjectsTab from '../components/about-page/projectsTab'

const AboutPage = ({ location }) => (
  <>
    <Layout>
      <SEO title="About" />
      <Navbar pathName={location.pathname} />
      <AboutWrapper className="aboutDiv">
        <h2>Who am I?</h2>
        <AboutIntro />
        <h2>Resume</h2>
        <AboutResume />
        <h2>Projects</h2>
        <ProjectsTab />
      </AboutWrapper>
      <Socials pathName={location.pathname} />
    </Layout>
  </>
)

export default AboutPage

const AboutWrapper = styled.div`
  max-width: 960px;
  margin: 100px auto 25px;
  display: flex;
  flex-direction: column;

  h2 {
    text-shadow: var(--elevation-1);
    margin: 0 1rem 0.5rem;
  }

  a {
    color: var(--tertiary);

    &:hover {
      color: var(--tertiaryLight);
    }
  }

  /* small/mobile */
  @media (max-width: 640px) {
    /* nothing right now */
  }
  /* medium/tablet */
  @media (max-width: 768px) {
    align-items: center;
  }
  /* large/tablet */
  @media (max-width: 1024px) {
    /* nothing right now */
    h2 {
      margin: 0 2rem 0.5rem;
    }
  }
`
