import React from 'react';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
const SocialIcons = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/yassineboujrada" target="_blank">
            <AiFillLinkedin />
        </a>
        <a href="https://github.com/yassineboujrada" target="_blank">
            <AiFillGithub />
        </a>
        
    </div>
  )
}

export default SocialIcons;
