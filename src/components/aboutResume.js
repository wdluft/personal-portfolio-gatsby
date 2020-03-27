import React, { useState } from 'react'
import styled from 'styled-components'

import ResumeItem from './ResumeItem'
import { resumeInfo } from './utils/resumeInfo'

const AboutResume = () => {
  const [resume] = useState(resumeInfo)

  return (
    <div>
      {resume.map(item => (
        <ResumeItem key={item.id} position={item} />
      ))}
    </div>
  )
}

export default AboutResume
