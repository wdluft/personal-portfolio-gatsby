import React from 'react'
import styled from 'styled-components'

import ContactBox from './contactBox'

const ContactBoxes = () => {
  return (
    <StyledContactBoxes>
      <ContactBox
        contactType="Twitter"
        contactValue="@IAmWillDL"
        contactLink="https://twitter.com/iamwilldl"
      />
      <ContactBox
        contactType="Email"
        contactValue="william.d.luft@gmail.com"
        contactLink="mailto:william.d.luft@gmail.com"
      />
    </StyledContactBoxes>
  )
}

export default ContactBoxes

const StyledContactBoxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* small/mobile */
  @media (max-width: 640px) {
    margin-bottom: 2.5rem;
  }
  /* medium/tablet */
  @media (max-width: 768px) {
    /* nothing right now */
    margin-bottom: 4rem;
  }
  /* large/tablet */
  @media (max-width: 1024px) {
    /* nothing right now */
  }
`
