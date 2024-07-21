import React from 'react'
import './About.css'
import useScrollReveal from '../../Hooks/useScrollReveal'

const About = () => {

  useScrollReveal('.about__header', {origin: 'top'});
  useScrollReveal('.about__experiance', {origin: 'bottom'});
  useScrollReveal('.about__skills', {origin: 'bottom'});

  return (
    <div className='about__section__container'>
        <h1 className='about__header'>About</h1>
        <div className="about__content">
            <div className="about__experiance">
                <p>I'm a dedicated software developer that has a strong enthusiasm for web development. 
                    Utilizing the latest web technologies to design and develop dynamic, responsive, 
                    and user-friendly web solutions is what I enjoy doing best. I have expertise creating 
                    dynamic web pages, managing and maintaining websites, and making sure security and 
                    performance are at their best. Apart from that, I have worked with technical teams on 
                    data migration and system integration, configured and customized Oracle ERP modules, and 
                    given thorough end-user training. In order to create meaningful digital experiences, I'm 
                    committed to always learning and developing in the web development industry.</p>
            </div>
            <div className="about__skills">
                <p>Skills</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>PHP</p>
                <p>Java</p>
                <p>Wordpress</p>
                <p>Bootstrap</p>
                <p>Google Analytics</p>
                <p>ReactJS</p>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>MySQL</p>
                <p>Git</p>
                <p>MS Office</p>
                <p>Oracle ERP - Cloud & EBS</p>
            </div>
        </div>
    </div>
  )
}

export default About
