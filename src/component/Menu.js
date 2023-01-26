import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
      <div className="container">
        <NavLink to={`/`} className="navbar-brand">Project</NavLink>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={`/home`} className="nav-link">Home</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={`/about`} className="nav-link">About</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={`/HeadTail`} className="nav-link">Head & Tail</NavLink>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
