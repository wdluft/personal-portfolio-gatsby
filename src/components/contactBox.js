import React from 'react'
import styled from 'styled-components'

const ContactBox = ({ contactType, contactValue, contactLink }) => {
  return (
    <StyledContactBox>
      <a href={contactLink} target="_blank" rel="noopener noreferrer">
        <span>{contactType}:</span> {contactValue}
      </a>
    </StyledContactBox>
  )
}

export default ContactBox

const StyledContactBox = styled.div`
  font-size: var(--largeFontSize);
  border: 3px var(--gray-1) solid;
  padding: 1rem 1.75rem;
  margin-bottom: 3rem;
  transition: padding 0.75s;
  background: var(--primary-3);
  box-shadow: var(--elevation-4);

  a {
    color: var(--gray-6);
  }

  &:hover {
    padding: 0.5rem 1.5rem;
    background: var(--secondary-3);
    text-decoration: underline;

    a {
      color: var(--gray-1);
    }
  }

  @media (max-width: 420px) {
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
  }
`
