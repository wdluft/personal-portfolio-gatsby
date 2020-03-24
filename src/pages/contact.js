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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
