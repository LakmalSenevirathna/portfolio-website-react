import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__section__container'>
      <hr />
      <div className="footer__content">
        <p>Designed & Developed by Me</p>
        <div className="social__icons">
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
    </div>
  )
}

export default Footer
