import React from 'react'
import styled from 'styled-components'

import ContactBox from './ContactBox'

const ContactBoxes = () => {
  return (
    <StyledContactBoxes>
      <ContactBox
        contactType="Email"
        contactValue="william.d.luft@gmail.com"
        contactLink="mailto:william.d.luft@gmail.com"
      />
      <ContactBox
        contactType="Twitter"
        contactValue="@IAmWillDL"
        contactLink="https://twitter.com/iamwilldl"
      />
    </StyledContactBoxes>
  )
}

export default ContactBoxes

const StyledContactBoxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 420px) {
    margin-bottom: 3rem;
  }
`
