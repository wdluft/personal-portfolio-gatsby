import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactBoxes from '../components/contact-page/contactBoxes'
import Navbar from '../components/navbar'
import Socials from '../components/socials'

const ContactPage = ({ location }) => (
  <>
    <Layout>
      <SEO title="Contact" />
      <Navbar pathName={location.pathname} />
      <ContactWrapper>
        <h1>Get in Touch</h1>
        <ContactBoxes />
      </ContactWrapper>
      <Socials pathName={location.pathname} />
    </Layout>
  </>
)

export default ContactPage

const ContactWrapper = styled.section`
  max-width: 1024px;
  margin-top: 150px;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 2rem;
    text-shadow: var(--elevation-1);
  }

  /* small/mobile */
  @media (max-width: 640px) {
    h1 {
      font-size: var(--heading-2);
    }

    margin-bottom: 1.75rem;
  }
  /* medium/tablet */
  @media (max-width: 768px) {
    /* nothing right now */
  }
  /* large/tablet */
  @media (max-width: 1024px) {
    /* nothing right now */
  }
`
