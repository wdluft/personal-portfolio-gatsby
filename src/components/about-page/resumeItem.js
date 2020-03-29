import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ResumeItem = ({ position }) => {
  return (
    <ResumeItemWrapper>
      <h3>{position.company}</h3>
      <h5>{position.position}</h5>
      <h5>
        {position.start} - {position.end}
      </h5>
      <p>{position.description}</p>
    </ResumeItemWrapper>
  )
}

ResumeItem.propTypes = {
  position: PropTypes.object.isRequired
}

export default ResumeItem

const ResumeItemWrapper = styled.div`
  padding-left: 1rem;
  padding-bottom: 1.5rem;

  p {
    line-height: 1.75rem;
    font-size: var(--mediumFontSize);
  }

  h3 {
    color: var(--tertiary-3);
    letter-spacing: 0.2rem;
  }

  h5 {
    font-weight: normal;
  }
`