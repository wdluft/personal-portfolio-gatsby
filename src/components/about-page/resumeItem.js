import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ResumeItem = ({ position }) => {
  return (
    <ResumeItemWrapper>
      <div className="position__heading">
        {position.company ? <h3>{position.company}</h3> : ''}
        <h5>{position.position}</h5>
        <h5>
          {position.start} - {position.end}
        </h5>
      </div>
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
  padding-right: 1rem;
  padding-bottom: 1.5rem;

  p {
    font-family: var(--headingFont);
    border-bottom: 3px solid var(--tertiary);
    padding-bottom: 0.5rem;
  }

  h3 {
    color: var(--tertiary);
    letter-spacing: 0.2rem;
  }

  h5 {
    font-weight: normal;
  }

  .position__heading {
    padding-bottom: 1rem;
  }

  /* small/mobile */
  @media (max-width: 640px) {
  }
  /* medium/tablet */
  @media (max-width: 768px) {
    .position__heading {
      text-align: center;
    }
  }
  /* large/tablet */
  @media (max-width: 1024px) {
  }
`
