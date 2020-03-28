import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactBoxes from '../components/contactBoxes'

const ContactPage = () => (
  <>
    <Layout>
      <SEO title="Contact" />
      <ContactWrapper>
        <h1>Get in Touch</h1>
        <ContactBoxes />
      </ContactWrapper>
    </Layout>
  </>
)

export default ContactPage

const ContactWrapper = styled.section`
  max-width: 1100px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 1rem;
    text-shadow: var(--elevation-1);
  }
`
