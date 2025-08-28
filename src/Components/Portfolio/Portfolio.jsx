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
import image10 from '../../Assets/Portfolio/10.png'
import image11 from '../../Assets/Portfolio/11.png'

const Portfolio = () => {

    useScrollReveal('.portfolio__header', {origin: 'top'});
    useScrollReveal('.content', {origin: 'bottom'});
    useScrollReveal('.showMore', {origin: 'bottom'});
    useScrollReveal('.timeline__item', {origin: 'left'});

    const[visiblePortfolios, setVisiblePortfolios] = useState(6);
    const [showingAll, setShowingAll] = useState(false);

    const portfolios = [
        { image: image10, appName:"Sri Lanka Travel Blog", link: "https:/intosrilanka.com" },
        { image: image11, appName:"Finland Job Finding Resources and more", link: "https://jobfinderfinland.com" },
        { image: image7, appName:"Travel Website", link: "https://github.com/LakmalSenevirathna/Travel-Website" },
        { image: image8, appName:"Photography Landing Page", link: "https://github.com/LakmalSenevirathna/Photography-Landing-Page" },
        { image: image9, appName:"E Learning Landing Page", link: "https://github.com/LakmalSenevirathna/E-Learning-Landing-Page" },
        { image: image1, appName:"Weather App", link: "https://github.com/LakmalSenevirathna/weather-app-using-react" },
        { image: image2, appName:"Tic Tac Toe Game", link: "https://github.com/LakmalSenevirathna/Tic-Tac-Toe-Game-in-React-Js" },
        { image: image3, appName:"Stopwatch", link: "https://github.com/LakmalSenevirathna/Stopwatch-in-ReactJS" },
        { image: image4, appName:"Hotel Booking Website", link: "https://github.com/LakmalSenevirathna/Responsive-Hotel-Booking-Website" },
        { image: image5, appName:"Login Signup", link: "https://github.com/LakmalSenevirathna/Login-Signup-React-Js" },
        { image: image6, appName:"Todo List", link: "https://github.com/LakmalSenevirathna/Todo-List-React-Js" }


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
      <div className="portfolio">
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
      <div className="experience">
        <h2 className='header__experience'>Experience</h2>
        <div className="timeline">
          <div className="timeline__item">
              <div className="timeline__year">
                  <span>2024</span>
                  <div className="timeline__icon"></div>
              </div>
              <div className="timeline__content">
                  <h3>Associate Functional Consultant - Oracle ERP</h3>
                  <h4>DMS Software Technologies (Pvt) Ltd</h4>
                  <p>
                  Configured Oracle ERP modules (Inventory, Purchasing, Accounts Payables) to meet 
                  client requirements and align with business processes. Collaborated with technical 
                  teams on customization, integration, and data migration. Conducted system testing to 
                  ensure quality. Provided end-user training and support for smooth ERP adoption and 
                  utilization.
                  </p>
              </div>
          </div>
          <div className="timeline__item">
              <div className="timeline__year">
                  <span>2022</span>
                  <div className="timeline__icon"></div>
              </div>
              <div className="timeline__content">
                  <h3>eLearning Support Engineer</h3>
                  <h4> TecnoZone IT Solutions (Pvt.) Ltd</h4>
                  <p>
                  Provided 1st line technical support by answering queries via ticketing tool, phone, and email. 
                  Worked closely with the development team to install development-related tools. Created, updated, 
                  and maintained document workflows, user resources, and IT processes. Identified and resolved 
                  technical issues, recommending effective solutions.
                  </p>
              </div>
          </div>
          <div className="timeline__item">
              <div className="timeline__year">
                  <span>2021</span>
                  <div className="timeline__icon"></div>
              </div>
              <div className="timeline__content">
                  <h3>Freelance Web Developer</h3>
                  <h4>Colombo - Sri Lanka</h4>
                  <p>
                  Managed and maintained WordPress websites, ensuring optimal performance, security, and user 
                  experience. Designed and developed dynamic web pages using HTML, CSS, JavaScript, PHP, and 
                  Bootstrap, and applied media queries to create responsive websites across different screen 
                  sizes.
                  </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
