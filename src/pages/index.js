import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionWrapper className="section">
      <h1 className="section__h1">
        I am <span className="section__span">Will Luft</span>
      </h1>
      <p className="section_p">
        I build websites, do customer support, and play sports and Magic the
        Gathering
      </p>
    </SectionWrapper>
  </Layout>
)

export default IndexPage

const SectionWrapper = styled.section`
  background: var(--gray-5);
  max-width: 748px;
  margin: 25vh auto 0;
  border-radius: 5px;
  padding: 10px;
  box-shadow: var(--massiveShadow);

  .section__h1 {
    font-size: var(--extraLargeFontSize);
  }

  .section__span {
    color: var(--primary-3);
  }

  .section_p {
    font-size: var(--mediumFontSize);
  }
`
