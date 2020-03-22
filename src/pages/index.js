import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/navbar'
import Socials from '../components/socials'
import SEO from '../components/seo'

const IndexPage = () => (
  <>
    <Navbar />
    <SEO title="Home" />
    <SectionWrapper className="section">
      <div className="section__card">
        <h1 className="section__h1">
          I am <span className="section__span">Will Luft</span>
        </h1>
        <p className="section_p">
          I build websites, do customer support, and play sports and Magic the
          Gathering
        </p>
      </div>
    </SectionWrapper>
    <Socials />
  </>
)

export default IndexPage

const SectionWrapper = styled.section`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .section__card {
    background: var(--gray-5);
    max-width: 748px;
    margin: 25vh auto 0;
    border-radius: 5px;
    padding: 10px;
    box-shadow: var(--massiveShadow);
  }

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
