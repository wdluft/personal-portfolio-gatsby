import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logoBlue from '../images/logo-blue.svg'
import logoGreen from '../images/logo-green.svg'
import logoPink from '../images/logo-pink.svg'

const Navbar = () => {
  return (
    <NavWrapper>
      <div>
        <Link to="/">
          <img src={logoPink} alt="Logo" className="nav__img-logo" />
        </Link>
      </div>
      <div className="nav__links">
        <ul className="nav__links__ul">
          <li className="nav__links__ul__li">
            <Link to="/about" activeClassName="active" className="about">
              About
            </Link>
          </li>
          <li className="nav__links__ul__li">
            <Link to="/contact" activeClassName="active" className="contact">
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

  .nav__img-logo {
    width: 50px;
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
          border-bottom: 2px solid var(--secondary-3);
        }
        &.contact {
          border-bottom: 2px solid var(--tertiary-3);
        }
      }
    }
  }

  .active {
    border-bottom: 2px solid var(--primary-3);
  }
`
