import React from 'react';
import './experiences.css';
import {BsPatchCheckFill} from 'react-icons/bs';

export const Experiences = () => {
  return (
    <section id='experiences'>
        <h5>What Skills I Own</h5>
        <h2>My Skills</h2>
        <div className='container experience__container'>
            <div className='experience__frontend'>
                <h3>Frontend Developement</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>CSS 3</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>JavaScript ES6</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>React Js</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>Angular</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='experience__backend'>
                <h3>Backend Developement</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>Flask</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>Django</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>Node Js</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='experience__language'>
                <h3>Programation Language</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>Python</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>Java</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>C</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='experience__language'>
                <h3>DataBase Language</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>Oracle DB</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>MySQL DB</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='experience__details'>
                        <BsPatchCheckFill className="experience__details__icons"/>
                        <div>
                            <h4>Mongo DB</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}
