import React from 'react'
import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('wzmaster26@gmail.com', 'template_l7qq4g2', form.current, 'jF2-b4dUP4FRNQ9Si')
    e.target.reset();
  
  };

  
  return (
    <section id="contact" >
      <h5>Get Touch</h5>
      <h2>Contact Me</h2>

        <div className="container contact__container">
           <div className="contact__options">
              <article className="contact__option">
                <AiOutlineMail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5> +51 968 108 836</h5>
                <a href="wxmater26@gmail.com"target='__blank'>Sen a Message</a>
              </article>

              <article className="contact__option">
                <BsMessenger className='contact__option-icon' />
                <h4>Nessage</h4>
                <h5> wzmaster tutorials</h5>
                <a href="#" target='__blank'>Sen a Message</a>
              </article>

              <article className="contact__option">
                <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5> wzmaster26@gmail.com</h5>
                <a href="https://walink.co/ad04bb" target='__blank'>Sen a Message</a>
              </article>

           </div>
           {/* END OF CONTACT PORFOLIO */}
             <div>
             <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                <textarea name="message"  rows="/" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Mesasge</button>
             </form>
             </div>
        </div> 
    </section>
  )
}

export default Contact