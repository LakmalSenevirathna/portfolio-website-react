import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__section__container'>
      <hr />
      <div className="footer__content">
        <p>Designed & Developed by Me</p>
        <div className="social__icons">
          <i className="ri-linkedin-box-line ri-2x"></i>
          <i className="ri-instagram-line ri-2x"></i>
          <i className="ri-github-line ri-2x"></i>
          <i className="ri-mail-line ri-2x"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
