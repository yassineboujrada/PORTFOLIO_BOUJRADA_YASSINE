import React from 'react';
import './about.css';
import About_Me from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
export const About = () => {
  return (
    <section id='about'>
        <h5>Get To Knew Me Better</h5>
        <h2>About Me</h2>
        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-img'>
                    <img src={About_Me} alt='more information' style={{height:'26rem'}}/>
                </div>
            </div>
            <div className='about__me_content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='card_icon'/>
                        <h5>Experiences</h5>
                        <small>7+ Months Working</small>
                    </article>

                    <article className='about__card'>
                        <VscFolderLibrary className='card_icon'/>
                        <h5>Projects</h5>
                        <small>20+ Completed Projects</small>
                    </article>
                </div>

                <p>lorem sdivdsdcmimddm 
                    km d mf VscFolderLibraryddoodck
                    cdscicodoksd
                    mdcdocdscosdmc
                    mdcmsmocdmomcomdcmdos
                </p>

                <a href="#contact" className='btn btn-primary'>let's Talk</a>
            </div>
        </div>
    </section>
  )
}
