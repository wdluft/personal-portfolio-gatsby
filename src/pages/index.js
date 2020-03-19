import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainWrapper className="main">
      <h1 className="main__h1">
        I am <span className="main__span">Will Luft</span>
      </h1>
      <p className="main_p">
        I build websites, do customer support, and play sports and Magic the
        Gathering
      </p>
    </MainWrapper>
  </Layout>
)

export default IndexPage

const MainWrapper = styled.main`
  background: var(--gray-4);
  max-width: 748px;
  margin: 30vh auto;
  border-radius: 5px;
  padding: 10px;
  box-shadow: inset 0 3px 0 0 rgba(98, 98, 98, 1),
    0 10px 3px 10px rgba(34, 34, 34, 0.75),
    0 20px 40px 40px rgba(34, 34, 34, 0.45);

  .main__h1 {
    font-size: var(--waytoobig-text);
    font-weight: bold;
  }

  .main__span {
    color: var(--primary-color-3);
  }

  .main_p {
    font-size: var(--lg-text);
  }
`
