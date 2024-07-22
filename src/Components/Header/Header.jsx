import React, { useEffect, useRef } from 'react'
import './Header.css'
import headerImage from '../../Assets/Lakmal Senevirathna.png';
import useScrollReveal from '../../Hooks/useScrollReveal';
import Typed from 'typed.js';

const Header = () => {

  //Scroll animation
  useScrollReveal('.header__text__wrap', { origin: 'left' });
  useScrollReveal('.header__image__wrap', { origin: 'right' });

  //Typing animation
  // Create reference to store the DOM element containing the animation
  const typingElement = useRef(null);
  useEffect(() => {
    const typed = new Typed(typingElement.current, {
      strings: ['Front-end Developer', 'Web Developer', 'Tech Enthusiast'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  },[])

  return (
    <div className='header__section__container' id='home'>
      <div className="header__text__wrap">
        <h3>Hi, Myself</h3>
        <h1>Lakmal Senevirathna</h1>
        <h3>And I am a <span ref={typingElement} className='typing'>Front-end Developer</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nisi voluptate, at 
            harum autem cumque nobis tenetur a iure, minus expedita et aperiam, officia odit?
        </p>
        <div className="header__social__icons">
          <i className="ri-linkedin-box-line ri-2x"></i>
          <i className="ri-instagram-line ri-2x"></i>
          <i className="ri-github-line ri-2x"></i>
          <i className="ri-mail-line ri-2x"></i>
        </div>
      </div>
      <div className="header__image__wrap">
        <img src={headerImage} alt="" className='header__image' />
      </div>
    </div>
  )
}

export default Header
