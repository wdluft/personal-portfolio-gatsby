import React from 'react'
import styled from 'styled-components'

const Socials = () => {
  return (
    <SocialWrapper>
      <h2 className="footer__heading">Follow Me</h2>
      <ul className="footer__list">
        <li className="footer__listItem">
          <a
            href="https://twitter.com/iamwilldl"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            Twitter
          </a>
        </li>
        <li className="footer__listItem">
          <a
            href="https://github.com/wdluft"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            Github
          </a>
        </li>
        <li className="footer__listItem">
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
  margin-top: 20px;
  margin-bottom: 50px;

  .footer__heading {
    margin-bottom: 0;
  }

  .footer__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .footer__listItem {
    margin: 0.75rem;

    a {
      padding: 5px;
    }
  }
`
