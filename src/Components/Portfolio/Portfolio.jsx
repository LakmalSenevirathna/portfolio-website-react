import React, { useState } from 'react'
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

    const[visiblePortfolios, setVisiblePortfolios] = useState(6);
    const [showingAll, setShowingAll] = useState(false);

    const portfolios = [
        { image: image1, link: "https://github.com/LakmalSenevirathna/weather-app-using-react" },
        { image: image2, link: "https://github.com/LakmalSenevirathna/Tic-Tac-Toe-Game-in-React-Js" },
        { image: image3, link: "https://github.com/LakmalSenevirathna/Stopwatch-in-ReactJS" },
        { image: image4, link: "https://github.com/LakmalSenevirathna/Responsive-Hotel-Booking-Website" },
        { image: image5, link: "https://github.com/LakmalSenevirathna/Login-Signup-React-Js" },
        { image: image6, link: "https://github.com/LakmalSenevirathna/Todo-List-React-Js" },
        { image: image7, link: "https://github.com/LakmalSenevirathna/Travel-Website" },
        { image: image8, link: "https://github.com/LakmalSenevirathna/Photography-Landing-Page" },
        { image: image9, link: "https://github.com/LakmalSenevirathna/E-Learning-Landing-Page" }
      ];

      const toggleShow = () => {
        if (showingAll) {
            setVisiblePortfolios(6);
        } else {
            setVisiblePortfolios(portfolios.length);
        }
        setShowingAll(!showingAll);
    };

  return (
    <div className='portfolio__section__container'>
      <h1>Portfolio</h1>
      <div className="portfolio__content">
        {portfolios.slice(0, visiblePortfolios).map((portfolio, index) => (
            <div className="content" key={index}>
                <a href={portfolio.link} target="_blank" rel="noopener noreferrer"><img src={portfolio.image} alt="" className='portfolio__image' /></a>
            </div>
        ))}
      </div>
      <div className='showMore'>
        <button onClick={toggleShow} className='show__more__button'>
            {showingAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  )
}

export default Portfolio
