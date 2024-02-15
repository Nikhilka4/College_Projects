import React from 'react'
import logo from '../assets/logo.png'
import "./Header.css"

const Header = () => {
  return (
    <>
    <nav>
        <div className="logo">
                <img src={logo} alt="avanthi logo" />
            </div>
            <div className="login">
                <a href="/Login/login.html"><button>LOGIN</button></a>
            </div>
    </nav>
    <div className="color"></div>
    </>
  )
}

export default Header;