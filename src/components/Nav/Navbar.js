import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <nav>
      <div className="logo">
        <h4>Logo</h4>
      </div>
      <ul className={isOpen ? 'nav-links nav-active' : 'nav-links'}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <Link path to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className={isOpen ? 'burger open' : 'burger'} onClick={toggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default NavBar
