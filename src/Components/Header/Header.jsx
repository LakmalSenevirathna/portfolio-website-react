import React from 'react'
import './Header.css'
import headerImage from '../../Assets/Lakmal Senevirathna.png';

const Header = () => {
  return (
    <div className='header__section__container'>
      <div className="header__text__wrap">
        <h3>Hi, Myself</h3>
        <h1>Lakmal Senevirathna</h1>
        <h3>And I am a Front-end Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nisi voluptate, at 
            harum autem cumque nobis tenetur a iure, minus expedita et aperiam, officia odit?
        </p>
      </div>
      <div className="header__image__wrap">
        <img src={headerImage} alt="" className='header__image' />
      </div>
    </div>
  )
}

export default Header
