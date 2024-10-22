import React from 'react'
import './About.css'
import useScrollReveal from '../../Hooks/useScrollReveal'
import html from '../../Assets/Skills/html.png'
import css from '../../Assets/Skills/css.png'
import js from '../../Assets/Skills/javascript.png'
import php from '../../Assets/Skills/php.png'
import java from '../../Assets/Skills/java.png'
import wp from '../../Assets/Skills/wp.png'
import bs from '../../Assets/Skills/bootstrap.png'
import reactjs from '../../Assets/Skills/react.png'
import nodejs from '../../Assets/Skills/node.png'
import expressjs from '../../Assets/Skills/express.png'
import mysql from '../../Assets/Skills/mysql.png'
import git from '../../Assets/Skills/git.png'

const About = () => {

  useScrollReveal('.about__header', {origin: 'top'});
  useScrollReveal('.about__experiance', {origin: 'bottom'});
  useScrollReveal('.about__skills', {origin: 'bottom'});
  useScrollReveal('.skill', {origin: 'bottom'});

  return (
    <div className='about__section__container' id='about'>
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
              <h3>My Skills</h3>
              <div className="skills">
                <div className="skill">
                  <img src={html} alt="" />
                  <p>HTML</p>
                </div>
                <div className="skill">
                  <img src={css} alt="" />
                  <p>CSS</p>
                </div>
                <div className="skill">
                  <img src={js} alt="" />
                  <p>JavaScript</p>
                </div>
                <div className="skill">
                  <img src={php} alt="" />
                  <p>Php</p>
                </div>
                <div className="skill">
                  <img src={java} alt="" />
                  <p>Java</p>
                </div>
                <div className="skill">
                  <img src={wp} alt="" />
                  <p>WordPress</p>
                </div>
                <div className="skill">
                  <img src={bs} alt="" />
                  <p>Bootstrap</p>
                </div>
                <div className="skill">
                  <img src={mysql} alt="" />
                  <p>MySql</p>
                </div>
                <div className="skill">
                  <img src={reactjs} alt="" />
                  <p>ReactJs</p>
                </div>
                <div className="skill">
                  <img src={nodejs} alt="" />
                  <p>NodeJs</p>
                </div>
                <div className="skill">
                  <img src={expressjs} alt="" />
                  <p>ExpressJs</p>
                </div>
                <div className="skill">
                  <img src={git} alt="" />
                  <p>Git</p>
                </div>
              </div>
                {/* <p>Skills</p>
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
                <p>Oracle ERP - Cloud & EBS</p> */}
            </div>
        </div>
    </div>
  )
}

export default About
