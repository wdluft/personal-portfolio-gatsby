import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logoImage from '../images/logo2.svg'

const Navbar = () => {
  return (
    <NavWrapper>
      <div>
        <Link to="/">
          <img src={logoImage} alt="Logo" className="nav__img-logo" />
        </Link>
      </div>
      <div className="nav__links">
        <ul className="nav__links__ul">
          <li className="nav__links__ul__li">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__links__ul__li">
            <Link to="/contact">Contact</Link>
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
  background: rgba(34, 34, 34, 0.85);

  .nav__img-logo {
    width: 54px;
  }

  .nav__links__ul {
    display: flex;
    flex-direction: row;
  }

  .nav__links__ul__li {
    margin: 0 15px;
  }
`
