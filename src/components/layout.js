import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './navbar'
import Socials from './socials'
import './layout.css'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutMainWrapper className="layout">
        <main>{children}</main>
      </LayoutMainWrapper>
      <Socials />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

const LayoutMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
`
