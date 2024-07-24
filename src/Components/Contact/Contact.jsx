import React, { useRef, useState } from 'react'
import './Contact.css'
import useScrollReveal from '../../Hooks/useScrollReveal'
import emailjs from '@emailjs/browser';

const Contact = () => {

  useScrollReveal('.contact__header', {origin: 'top'});
  useScrollReveal('.contact__form', {origin: 'bottom'});

  //Email popup message
  const [emailPopup, setEmailPopup] = useState(false);
  const [emailStatus, setEmailStatus] = useState('');

  //EmailJs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wp5hh3k', 'template_15r8din', form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setEmailPopup(true);
          setEmailStatus("Message has been sent successfully!");
          console.log('SUCCESS!');
          form.current.reset(); // Clear the form fields on success
        },
        (error) => {
          setEmailPopup(true);
          setEmailStatus("Failed");
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact__section__container' id='contact'>
      <h1 className='contact__header'>Contact</h1>
      <div className="contact__content">
        <div className="contact__form">
          <h3>Drop me a line</h3>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Name' name="user_name" required/>
                <input type="email" placeholder='E-mail' name="user_email" required/>
                <textarea placeholder='Message' name="message" required></textarea>
                <button type="submit" value="Send" className='submit__button'>Send</button>
            </form>
        </div>
        { emailPopup ?
        <div className="contact__popup">
        <h3>{emailStatus}</h3>
        <button onClick={() => setEmailPopup(false)}>Ok</button>
        </div>
        : ''
        }
      </div>
    </div>
  )
}

export default Contact
