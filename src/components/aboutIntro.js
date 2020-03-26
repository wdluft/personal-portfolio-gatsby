import React from 'react'
import { Link } from 'gatsby'
import headshot from '../images/headshot.jpg'
import styled from 'styled-components'

const AboutIntro = () => {
  return (
    <AboutIntroWrapper>
      <div className="aboutP">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          tempora optio voluptate ex. Earum perferendis fugiat quisquam animi,
          magni quos.
        </p>
      </div>
      <img src={headshot} alt="Will Luft" />
    </AboutIntroWrapper>
  )
}

export default AboutIntro

const AboutIntroWrapper = styled.div`
  img {
    width: 200px;
    border-radius: 50%;
  }
`
