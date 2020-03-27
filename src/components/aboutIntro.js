import React from 'react'
import { Link } from 'gatsby'
import headshot from '../images/headshot.jpg'
import styled from 'styled-components'

const AboutIntro = () => {
  return (
    <AboutIntroWrapper>
      <img src={headshot} alt="Will Luft" />
      <div className="aboutP">
        <p>
          Hi, I'm Will Luft. I am a Customer Support Specialist for{' '}
          <a href="https://www.donorschoose.org/">DonorsChoose</a>, helping
          teachers and donors with any questions they have.
        </p>
        <p>I love playing soccer, volleyball, and Magic the Gathering.</p>
        <p>
          Please <Link to="/contact">reach out to me</Link> if you'd like to do
          something together or chat.
        </p>
      </div>
    </AboutIntroWrapper>
  )
}

export default AboutIntro

const AboutIntroWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-content: center;

  padding-top: 15px;
  border-radius: 5px;
  background: var(--gray-5);
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-top: var(--primary-3) solid 10px;
  padding-bottom: 1.5rem;

  img {
    width: 175px;
    border-radius: 5px;
    grid-column: 2/3;
    grid-row: 1/3;
    align-self: center;
    margin: auto;
    box-shadow: var(--elevation-1);
  }

  .aboutP {
  }

  p {
    font-size: var(--mediumFontSize);
    line-height: 1.75rem;
    padding-left: 1rem;
  }
`
