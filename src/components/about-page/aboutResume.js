import React, { useState } from 'react'
import styled from 'styled-components'

import ResumeItem from './ResumeItem'
import { resumeInfo } from '../utils/resumeInfo'

const AboutResume = () => {
  const [resume] = useState(resumeInfo)

  return (
    <ResumeWrapper>
      {resume.map(item => (
        <ResumeItem key={item.id} position={item} />
      ))}
    </ResumeWrapper>
  )
}

export default AboutResume

const ResumeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-top: 15px;
  border-radius: 5px;
  background: var(--gray-7);
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-top: var(--tertiary-3) solid 10px;
  margin-bottom: 3rem;
`
