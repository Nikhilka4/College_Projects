
import React from 'react'
import logo from '../assets/logo.png';
import Button from './Button';
import "./Header.css";

const Header = ({ showLogin }) => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="avanthi logo" />
        </div>
        <div className="login">
          {showLogin && <Button label="LOGIN" applyMargin={true} />}
        </div>
      </nav>
      <div className="color"></div>
    </>
  )
}

export default Header;
