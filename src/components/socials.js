import React from 'react'
import styled from 'styled-components'

const Socials = () => {
  return (
    <SocialWrapper>
      <h1 className="footer__header">Follow Me</h1>
      <ul className="footer__list">
        <li>
          <a
            href="https://twitter.com/iamwilldl"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/wdluft"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/william-luft-42ab9258/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </SocialWrapper>
  )
}

export default Socials

const SocialWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-color);
  margin-bottom: 25px;

  .footer__header {
    grid-column: 1/-1;
  }

  .footer__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`
