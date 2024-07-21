import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__section__container'>
      <hr />
      <div className="footer__content">
        <p>Designed & Developed by Me</p>
        <div className="social__icons">
          <i class="ri-linkedin-box-line ri-2x"></i>
          <i class="ri-instagram-line ri-2x"></i>
          <i class="ri-github-line ri-2x"></i>
          <i class="ri-mail-line ri-2x"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
