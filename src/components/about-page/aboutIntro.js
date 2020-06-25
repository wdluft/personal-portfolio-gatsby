import React from 'react'
import { Link } from 'gatsby'
import headshot from '../../images/headshot.jpg'
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
        <br />
        <p>
          I am an aspiring web developer, focusing on HTML, CSS, JavaScript, and
          React. Below are some of the projects I've built.
        </p>
        <br />
        <p>
          To get my thoughts out of my head, I write for my blog,{' '}
          <a href="https://www.becomebydoing.me">Become by Doing</a>. I'll write
          about anytihng ranging from web development, to what's going on in the
          world, to my personal philosophy.
        </p>
        <br />
        <p>
          Please <Link to="/contact">reach out to me</Link> if you'd like to
          chat or build something together.
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
  background: var(--black);
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-top: var(--tertiary) solid 10px;
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;

  img {
    width: 175px;
    border-radius: 5px;
    grid-column: 2/3;
    grid-row: 1/3;
    align-self: center;
    margin: auto;
    box-shadow: var(--elevation-1);
  }

  p {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  a {
    color: var(--tertiary);

    &:hover {
      color: var(--tertiaryLight);
    }
  }

  /* small/mobile */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;

    img {
      display: none;
    }
  }
  /* medium/tablet */
  @media (max-width: 768px) {
    /* nothing right now */
  }
  /* large/tablet */
  @media (max-width: 1024px) {
    margin: 0 1rem 2rem;
  }
`
