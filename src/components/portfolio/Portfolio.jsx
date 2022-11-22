import React from 'react';
import './portfolio.css';
import port1 from '../../assets/portfolio1.jpg'
import port2 from '../../assets/portfolio2.jpg'
import port3 from '../../assets/portfolio3.jpg'
import port4 from '../../assets/portfolio4.jpg'
import port5 from '../../assets/portfolio5.png'
import port6 from '../../assets/portfolio6.jpg'

const projects_portfolio = [
  {
    id:1,
    img:port1,
    title:"this is project of port",
    git_link:"https://github.com/yassineboujrada?tab=repositories",
    demo_link:"https://github.com/yassineboujrada?tab=repositories"
  },
  {
    id:2,
    img:port2,
    title:"this is project of port",
    git_link:"https://github.com/yassineboujrada?tab=repositories",
    demo_link:"https://github.com/yassineboujrada?tab=repositories"
  },
  {
    id:3,
    img:port3,
    title:"this is project of port",
    git_link:"https://github.com/yassineboujrada?tab=repositories",
    demo_link:"https://github.com/yassineboujrada?tab=repositories"
  },
  {
    id:4,
    img:port4,
    title:"this is project of port",
    git_link:"https://github.com/yassineboujrada?tab=repositories",
    demo_link:"https://github.com/yassineboujrada?tab=repositories"
  },
  {
    id:5,
    img:port5,
    title:"this is project of port",
    git_link:"https://github.com/yassineboujrada?tab=repositories",
    demo_link:"https://github.com/yassineboujrada?tab=repositories"
  },
  {
    id:6,
    img:port6,
    title:"this is project of port",
    git_link:"https://github.com/yassineboujrada?tab=repositories",
    demo_link:"https://github.com/yassineboujrada?tab=repositories"
  },
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
          {
            projects_portfolio.map(({id,img,title,git_link,demo_link}) => {
              return(
                <article key={id} className='portfolio_item'>
                  <div className='portfolio__item-img'>
                    <img src={img} alt={title} />
                  </div>
                  <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                    <h3>{title}</h3>
                  </div>
                  
                  <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'8px'}}>
                    <a href={git_link} target='_blank' className='btn'>GITHUB</a>
                    <a href={demo_link} target='_blank' className='btn btn-primary'>Live demo</a>
                  </div>
                </article>
              );
            })
          }
      </div>
    </section>
  )
}
