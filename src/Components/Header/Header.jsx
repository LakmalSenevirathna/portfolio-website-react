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
        <h3>Hi, I am</h3>
        <h1>Lakmal Senevirathna</h1>
        <h3>And a <span ref={typingElement} className='typing'></span></h3>
        <p>
          I'm a passionate front-end developer specializing in dynamic, responsive web solutions 
          using the latest technologies. I excel in designing, developing, and maintaining user-friendly 
          websites.
        </p>
        <div className="header__social__icons">
          <a href="https://www.linkedin.com/in/lakmal-senevirathna-b288b8176/" target='_blank'>
            <i className="ri-linkedin-box-line ri-2x"></i>
          </a>
          <a href="https://www.instagram.com/lakmal_senevirathna/" target='_blank'>
            <i className="ri-instagram-line ri-2x"></i>
          </a>
          <a href="https://github.com/LakmalSenevirathna" target='_blank'>
            <i className="ri-github-line ri-2x"></i>
          </a>
          <a href="mailto:lakmals.dev@gmail.com">
            <i className="ri-mail-line ri-2x"></i>
          </a>
        </div>
      </div>
      <div className="header__image__wrap">
        <img src={headerImage} alt="" className='header__image' />
      </div>
    </div>
  )
}

export default Header
