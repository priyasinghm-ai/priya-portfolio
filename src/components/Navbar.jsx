import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="brand" href="#home">Priya Singh</a>
      <div className="navlinks">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
