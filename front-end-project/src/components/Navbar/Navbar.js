import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import "../Navbar/Navbar.css"

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => setClick(false)

  // This codintion makes it so it will show the button depending on the size
  const showButton = () => {
    if (window.inner <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener("resize", showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <i className="fa-solid fa-wand-magic-sparkles"></i>
          </Link>

          {/* This is for the deskptop menubar */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          {/* This is the menu bar for the mobile version */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
