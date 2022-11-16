import React from 'react'
import './header.css';
import CV from '../../assets/cv.pdf'
import Me_pic from '../../assets/me.png'
import SocialIcons from './SocialIcons';

export const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I am</h5>
                <h1>Boujrada Yassine</h1>
                <h5 className='text-light'>Back-End Developper And Data Science Student</h5>
                <div className='general_btn_header'>
                    <a className="btn" href={CV} download>Download my CV</a>
                    <a className="btn btn-primary" href="#contact">Can we Talk</a>
                </div>
                <SocialIcons />
                <div className='me_zuin'>
                    <img src={Me_pic} alt="it's just my pic" style={{height:'34rem'}}/>
                </div>

                <a className="scroll__down" href="#contact">Scrool down</a>
            </div>
        </header>
    )
}
