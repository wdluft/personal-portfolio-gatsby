import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logoBlue from '../images/logo-blue.svg'
import logoGreen from '../images/logo-green.svg'
import logoPink from '../images/logo-pink.svg'

const Navbar = ({ pathName }) => {
  let currentLogo = logoBlue
  if (pathName === '/contact') {
    currentLogo = logoGreen
  } else if (pathName === '/about') {
    currentLogo = logoPink
  } else {
    currentLogo = logoBlue
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
      transition: all 0.75s cubic-bezier(0, 0.92, 1, 0.99);
      font-size: 1.75rem;
      color: var(--gray-1);
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
      color: var(--gray-1);

      &:hover {
        color: var(--gray-1);
        text-decoration: none;
        &.about {
          border-bottom: 3px solid var(--secondary-3);
        }
        &.contact {
          border-bottom: 3px solid var(--tertiary-3);
        }
      }
    }
  }

  .active {
    border-bottom: 3px solid var(--primary-3);

    &.about {
      border-bottom: 3px solid var(--secondary-3);
    }

    &.contact {
      border-bottom: 3px solid var(--tertiary-3);
    }
  }

  &:hover {
    .my-name {
      transform: translate3d(0, 0, 0);
    }
  }
`
