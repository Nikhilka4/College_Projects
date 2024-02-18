
import React from 'react'
import logo from '../assets/logo.png';
import Button from './Button';
import "./Header.css";
import { useNavigate } from 'react-router-dom';


const Header = ({ showLogin }) => {

  const navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="avanthi logo" />
        </div>
        <div className="login">
          {showLogin && <Button onClick = {() => navigate('/login')} label="LOGIN" applyMargin={true} />}
        </div>
      </nav>
      <div className="color"></div>
    </>
  )
}

export default Header;


