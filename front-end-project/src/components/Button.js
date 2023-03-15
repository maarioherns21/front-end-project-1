import React from "react"
import "./Button.css"
import { Link } from "react-router-dom"

const STYLES = ["btn--primary", "btn--outline"]

const SIZES = ["btn--medium", "btn--large"]

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  // These conditions are placed so when we make the 'buttonStyle' in other buttons all we have to do is add the style to make it work in other sections of code
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  // This setsup for dynnamically setting uop any button we place on the home page
  return (
    <Link to="sign-up" className="btn-mobile">
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  )
}
