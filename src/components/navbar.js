import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logoPrimary from '../images/logo-primary.svg'
import logoTertiary from '../images/logo-tertiary.svg'
import logoSecondary from '../images/logo-secondary.svg'

const Navbar = ({ pathName }) => {
  let currentLogo = logoPrimary
  if (pathName === '/contact') {
    currentLogo = logoTertiary
  } else if (pathName === '/about') {
    currentLogo = logoSecondary
  } else {
    currentLogo = logoPrimary
  }

  return (
    <NavWrapper>
      <div>
        <Link to={'/'} className="nav__link--home">
          <img src={currentLogo} alt="Logo" className="nav__img-logo" />
          <h1 className="my-name">Will Luft</h1>
        </Link>
      </div>
      <div className="nav__links">
        <ul className="nav__links__ul">
          <li className="nav__links__ul__li">
            <Link to={'/about'} activeClassName="active" className="about">
              About
            </Link>
          </li>
          <li className="nav__links__ul__li">
            <Link to={'/contact'} activeClassName="active" className="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </NavWrapper>
  )
}

export default Navbar

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  .nav__link--home {
    display: flex;
    align-items: center;

    .nav__img-logo {
      width: 50px;
      z-index: 2;
    }

    .my-name {
      transform: translate3d(-120%, 0, 0);
      margin-left: 10px;
      z-index: -1;
      transition: all 0.25s cubic-bezier(0, 0.92, 1, 0.99);
      font-size: 1.75rem;
      color: var(--white);
      font-weight: normal;
    }

    &:hover {
      text-decoration: none;
      border: none;
    }
  }

  .nav__links__ul {
    display: flex;
    flex-direction: row;
  }

  .nav__links__ul__li {
    margin: 0 15px;

    a {
      font-size: var(--largeFontSize);
      color: var(--white);

      &:hover {
        color: var(--white);
        text-decoration: none;
        &.about {
          border-bottom: 3px solid var(--tertiary);
        }
        &.contact {
          border-bottom: 3px solid var(--secondary);
        }
      }
    }
  }

  .active {
    border-bottom: 3px solid var(--primary);

    &.about {
      border-bottom: 3px solid var(--tertiary);
    }

    &.contact {
      border-bottom: 3px solid var(--secondary);
    }
  }

  &:hover {
    .my-name {
      transform: translate3d(0, 0, 0);
    }
  }

  /* small screens/mobile phones */
  @media (max-width: 640px) {
    .my-name {
      display: none;
    }
  }

  /* medium screens/tablets */
  @media (max-width: 768px) {
    /* nothing right now */
  }

  /* large screens/laptops */
  @media (max-width: 1024px) {
    /* nothing right now */
  }
`
