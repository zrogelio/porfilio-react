import React from 'react'
import "./portfolio.css"
import IMG1 from '../../asssets/portfolio1.jpg'
import IMG2 from '../../asssets/portfolio2.jpg'
import IMG3 from '../../asssets/portfolio3.jpg'
import IMG4 from '../../asssets/portfolio4.jpg'
import IMG5 from '../../asssets/portfolio5.png'
import IMG6 from '../../asssets/portfolio6.jpg'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
             <img src={IMG1} alt="" />
           </div>
           <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com"className='btn'target='__blank' >Github</a>
           <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
             <img src={IMG2} alt="" />
           </div>
           <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com"className='btn'target='__blank' >Github</a>
           <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
             <img src={IMG3} alt="" />
           </div>
           <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com"className='btn'target='__blank' >Github</a>
           <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
             <img src={IMG4} alt="" />
           </div>
           <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com"className='btn'target='__blank' >Github</a>
           <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
             <img src={IMG5} alt="" />
           </div>
           <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com"className='btn'target='__blank' >Github</a>
           <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
           <div className="portfolio__item-image">
             <img src={IMG6} alt="" />
           </div>
           <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com"className='btn'target='__blank' >Github</a>
           <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='__blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio