import React from 'react'
import { Link } from 'gatsby'
import headshot from '../images/headshot.jpg'
import styled from 'styled-components'

const AboutIntro = () => {
  return (
    <AboutIntroWrapper>
      <h1>Who am I?</h1>
      <img src={headshot} alt="Will Luft" />
      <div className="aboutP">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          tempora optio voluptate ex. Earum perferendis fugiat quisquam animi,
          magni quos.
        </p>
      </div>
    </AboutIntroWrapper>
  )
}

export default AboutIntro

const AboutIntroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  img {
    width: 175px;
    border-radius: 5px;
    grid-column: 2/3;
    grid-row: 1/3;
    align-self: center;
    margin: auto;
    box-shadow: var(--elevation-1);
  }
`
