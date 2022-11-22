import React from 'react'
import './footer.css'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Boujrada</a>

      <ul className='footer__links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiences'>My Projects</a></li>
        <li><a href='#contact'>Contact Me</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.instagram.com/yassine_boujrada/' target="_blank">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/yassineboujrada" target="_blank">
            <AiFillLinkedin />
        </a>
        <a href="https://github.com/yassineboujrada" target="_blank">
            <AiFillGithub />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Boujrada Yassine All rights reserved.</small>
      </div>
    </footer>
  )
}
