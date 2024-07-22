import React, { useState } from 'react'
import './Portfolio.css'
import useScrollReveal from '../../Hooks/useScrollReveal'
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

    useScrollReveal('.portfolio__header', {origin: 'top'});
    useScrollReveal('.content', {origin: 'bottom'});
    useScrollReveal('.showMore', {origin: 'bottom'});

    const[visiblePortfolios, setVisiblePortfolios] = useState(6);
    const [showingAll, setShowingAll] = useState(false);

    const portfolios = [
        { image: image1, appName:"Weather App", link: "https://github.com/LakmalSenevirathna/weather-app-using-react" },
        { image: image2, appName:"Tic Tac Toe Game", link: "https://github.com/LakmalSenevirathna/Tic-Tac-Toe-Game-in-React-Js" },
        { image: image3, appName:"Stopwatch", link: "https://github.com/LakmalSenevirathna/Stopwatch-in-ReactJS" },
        { image: image4, appName:"Hotel Booking Website", link: "https://github.com/LakmalSenevirathna/Responsive-Hotel-Booking-Website" },
        { image: image5, appName:"Login Signup", link: "https://github.com/LakmalSenevirathna/Login-Signup-React-Js" },
        { image: image6, appName:"Todo List", link: "https://github.com/LakmalSenevirathna/Todo-List-React-Js" },
        { image: image7, appName:"Travel Website", link: "https://github.com/LakmalSenevirathna/Travel-Website" },
        { image: image8, appName:"Photography Landing Page", link: "https://github.com/LakmalSenevirathna/Photography-Landing-Page" },
        { image: image9, appName:"E Learning Landing Page", link: "https://github.com/LakmalSenevirathna/E-Learning-Landing-Page" }
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
    <div className='portfolio__section__container' id='portfolio'>
      <h1 className='portfolio__header'>Portfolio</h1>
      <div className="portfolio__content">
        {portfolios.slice(0, visiblePortfolios).map((portfolio, index) => (
            // <div className="content" key={index}>
            //     <a href={portfolio.link} target="_blank" rel="noopener noreferrer"><img src={portfolio.image} alt="" className='portfolio__image' /></a>
            // </div>
            <div className="content__box" key={index}>
              <div className="content" >
                  <img src={portfolio.image} alt="" className='portfolio__image' />
                    <div className="content__layer">
                      <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                        <i className="ri-github-fill"></i>
                        <div className="app__name">{portfolio.appName}</div>
                      </a>
                    </div>
              </div>
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
