import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>#PORTFOLIO</div>
      <div className="navbar__container">
        <ul className='navbar__links'>
            <li className='navbar__item'><a href="#home" className='navbar__link'>Home</a></li>
            <li className='navbar__item'><a href="#about" className='navbar__link'>About</a></li>
            <li className='navbar__item'><a href="#portfolio" className='navbar__link'>Portfolio</a></li>
            <li className='navbar__item'><a href="#contact" className='navbar__link'>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
