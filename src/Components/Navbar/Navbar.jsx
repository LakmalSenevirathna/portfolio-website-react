import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {

  //Hamburger menu function
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  //Existing class names for the div
  const baseClass = 'navbar__container';

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
      <Link to="home" spy={true} smooth={true} offset={-280} duration={800}> Lakmal. </Link>
      </div>
      <div className={`${baseClass} ${isActive ? 'active' : ''}`}>
        <ul>
            <li>
              <Link className='navbar__link' to="home" spy={true} smooth={true} offset={-280} duration={800}> Home </Link>
            </li>
            <li>
              <Link className='navbar__link' to="about" spy={true} smooth={true} offset={-150} duration={800}> About </Link>
            </li>
            <li>
              <Link className='navbar__link' to="portfolio" spy={true} smooth={true} offset={-150} duration={800}> Portfolio </Link>
            </li>
            <li>
            <Link className='navbar__link' to="contact" spy={true} smooth={true} offset={-150} duration={800}> Contact </Link>
            </li>
        </ul>
      </div>
      <div className="hamburger" onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  )
}

export default Navbar
