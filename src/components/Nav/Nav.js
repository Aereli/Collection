import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "../Home/Home"
import Contact from "../Contact/Contact"
import "./style.scss"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <nav>
      <div className="logo">
        <p>
          <a href="/">Masks</a>
        </p>
      </div>
      <ul className={isOpen ? "nav-links nav-active" : "nav-links"}>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
      <div className={isOpen ? "burger open" : "burger"} onClick={toggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Nav
