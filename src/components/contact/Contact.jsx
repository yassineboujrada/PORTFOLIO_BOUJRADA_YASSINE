import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__cotainer'>
        <div className='contact__options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-img'/>
            <h4>Email</h4>
            <h5>yassine.boujrada@gmail.com</h5>
            <a href="mailto:yassine.boujrada@gmail.com" target='_blank'>Send Me Email</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-img'/>
            <h4>Messenger</h4>
            <h5>yassine boujrada</h5>
            <a href="https://m.me/100010338245835" target='_blank'>Send Me Message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-img'/>
            <h4>Whatssap</h4>
            <h5>+212</h5>
            <a href="https://api.whatsapp.com/send/?phone=%2B212643117923&text=Hi&app_absent=0" target='_blank'>Send Me Message</a>
          </article>
        </div>

        <form action=''>
          <input type="text" name='name' placeholder="Plz enter you're name ..." required/>
          <input type="email" name='email' placeholder="You're email ..." required/>
          <textarea type="message" name='msg' rows='7' placeholder="You're message ..." required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}
