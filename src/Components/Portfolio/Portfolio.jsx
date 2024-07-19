import React from 'react'
import './Portfolio.css'
import image1 from '../../Assets/Portfolio/1.png'
import image2 from '../../Assets/Portfolio/2.png'
import image3 from '../../Assets/Portfolio/3.png'
import image4 from '../../Assets/Portfolio/4.png'
import image5 from '../../Assets/Portfolio/5.png'
import image6 from '../../Assets/Portfolio/6.png'
import image7 from '../../Assets/Portfolio/7.png'
import image8 from '../../Assets/Portfolio/8.png'
import image9 from '../../Assets/Portfolio/9.png'

const Portfolio = () => {
  return (
    <div className='portfolio__section__container'>
      <h1>Portfolio</h1>
      <div className="portfolio__content">
        <div className="content">
           <a href="https://github.com/LakmalSenevirathna/weather-app-using-react"><img src={image1} alt="" className='portfolio__image' /></a>
        </div>
        <div className="content">
            <img src={image2} alt="" className='portfolio__image' />
        </div>
        <div className="content">
            <img src={image3} alt="" className='portfolio__image' />
        </div>
        <div className="content">
            <img src={image4} alt="" className='portfolio__image' />
        </div>
        <div className="content">
            <img src={image5} alt="" className='portfolio__image' />
        </div>
        <div className="content">
            <img src={image6} alt="" className='portfolio__image' />
        </div>
        <div className="content">
            <img src={image7} alt="" className='portfolio__image' />
        </div>
        <div className="content">
            <img src={image8} alt="" className='portfolio__image' />
        </div>
        <div className="content">
            <img src={image9} alt="" className='portfolio__image' />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
