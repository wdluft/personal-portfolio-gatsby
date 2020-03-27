import React from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'

const ResumeItem = ({ position }) => {
  return (
    <div>
      <h4>{position.company}</h4>
      <h5>{position.position}</h5>
      <p>
        {position.start} - {position.end}
      </p>
      <p>{position.description}</p>
    </div>
  )
}

ResumeItem.propTypes = {
  position: PropTypes.object.isRequired
}

export default ResumeItem
