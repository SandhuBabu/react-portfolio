import React, {useRef} from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ogryok8', 'template_c5jgxoe', form.current, 'A1SpFl49ST7oMu2GN')
      .then((result) => (error) => {
          alert(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='message__icon'/>
            <h4>Email</h4>
            <h5>sandhubabu704@gmail.com</h5>
            <a href="mailto:sandhubabu704@gmail.com">Send Email</a>
          </article>

          <article className="contact__option">
            <AiFillInstagram className='message__icon'/>
            <h4>Instagram</h4>
            <h5>Sandhu Babu</h5>
            <a href="https://www.instagram.com/sandhubabu_" target='_blank'>Send Email</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className='message__icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 9876543210</h5>
            <a href=" https://wa.me/8086267521" target='_blank' rel="noreferrer">Send Message</a>
          </article>
        </div>
        <form 
          onSubmit={sendEmail}
          ref={form}>
          <input type="text" name="name" id="" placeholder='Your Name Here' required />
          <input type="email" name="email" id="" placeholder='Your Email Address' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
