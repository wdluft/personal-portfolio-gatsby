import React from 'react'
import PropTypes from 'prop-types'

import './layout.css'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <main className="layout__main">{children}</main>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
  // currentPath: PropTypes.string.isRequired
}

export default Layout

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .layout__main {
    justify-self: center;
  }
`
