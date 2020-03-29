import React from 'react'
import styled from 'styled-components'

const ContactBox = ({ contactType, contactValue, contactLink }) => {
  return (
    <StyledContactBox>
      <a href={contactLink} target="_blank" rel="noopener noreferrer">
        {contactValue}
      </a>
    </StyledContactBox>
  )
}

export default ContactBox

const StyledContactBox = styled.div`
  font-size: var(--mediumFontSize);
  border: 3px var(--gray-1) solid;
  padding: 1rem 1.75rem;
  margin-bottom: 2rem;
  transition: padding 0.5s;
  background: var(--secondary-3);
  box-shadow: var(--elevation-4);
  border-radius: 5px;
  cursor: pointer;

  a {
    color: #111111;
  }

  &:hover {
    padding: 0.8rem 1.6rem;
    text-decoration: underline;
  }

  /* small/mobile */
  @media (max-width: 640px) {
    font-size: var(--largeFontSize);
    padding: 1rem 1.25rem;
  }
  /* medium/tablet */
  @media (max-width: 768px) {
    /* nothing right now */
    font-size: var(--largeFontSize);
  }
  /* large/tablet */
  @media (max-width: 1024px) {
    /* nothing right now */
  }
`
