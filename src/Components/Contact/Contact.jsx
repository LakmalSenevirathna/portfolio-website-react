import React from 'react'
import './Contact.css'
import useScrollReveal from '../../Hooks/useScrollReveal'

const Contact = () => {

  useScrollReveal('.contact__header', {origin: 'top'});
  useScrollReveal('.contact__form', {origin: 'bottom'});

  return (
    <div className='contact__section__container' id='contact'>
      <h1 className='contact__header'>Contact</h1>
      <div className="contact__content">
        <div className="contact__form">
          <h3>Drop me a line</h3>
            <form action="">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='E-mail' />
                <textarea placeholder='Message'></textarea>
                <button type="submit" className='submit__button'>Send</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
