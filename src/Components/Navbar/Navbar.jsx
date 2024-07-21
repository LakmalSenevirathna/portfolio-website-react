import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
      <Link to="home" spy={true} smooth={true} offset={-280} duration={800}> Lakmal. </Link>
      </div>
      <div className="navbar__container">
        <ul className='navbar__links'>
            <li className='navbar__item'>
              <Link className='navbar__link' to="home" spy={true} smooth={true} offset={-280} duration={800}> Home </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' to="about" spy={true} smooth={true} offset={-150} duration={800}> About </Link>
            </li>
            <li className='navbar__item'>
              <Link className='navbar__link' to="portfolio" spy={true} smooth={true} offset={-150} duration={800}> Portfolio </Link>
            </li>
            <li className='navbar__item'>
            <Link className='navbar__link' to="contact" spy={true} smooth={true} offset={-150} duration={800}> Contact </Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
