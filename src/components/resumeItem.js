import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ResumeItem = ({ position }) => {
  return (
    <ResumeItemWrapper>
      <h4>{position.company}</h4>
      <h5>{position.position}</h5>
      <p>
        {position.start} - {position.end}
      </p>
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
`
