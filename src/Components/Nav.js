import React, { useState } from 'react'
import "../styles/nav.css"

import Logo from "../Assets/images/3bf53f3da3d8c792b88e415ffe37d611fd47e0b296bcb588b656262e105731f5.svg"
import { Link } from 'react-router-dom'

function Nav() {
  const [isMenu, setIsMenu] = useState(false)
  return (
    <div className='nav-wrapper'>
      <div className="nav-container">
        <div className="nav-logo-wrapper">
          <img src={Logo} alt="Holy field logo" />
          <h3>HolyField</h3>
        </div>
        <div className="nav-web-links">
          <Link className='webNavLinks' to="/">Home</Link>
          <Link className='webNavLinks' to="/about">About</Link>
          <a className='webNavLinks' href="#" >Contact</a>
        </div>
        <div className="nav-mobile-links">
          <button className='burgerButton' onClick={() => setIsMenu(!isMenu)}>
            <div className={!isMenu ? "line1" : "line1 line1Anim"}> </div>
            <div className={!isMenu ? "line2" : "line2 line2Anim"} > </div>
            <div className={!isMenu ? "line3" : "line3 line3Anim"}> </div>
          </button>

        </div>
      </div >
      <div className={isMenu ? "mobileMenu-links-wrapper" : "mobileMenu-links-wrapper isMobileLink"}>
        <div className="mobileMenu-links-container">

          <Link className='webNavLinks' to="/">Home</Link>
          <Link className='webNavLinks' to="/about">About</Link>
          <a className='webNavLinks' href="#" >Contact</a>
        </div>
      </div>
    </div >
  )
}

export default Nav
