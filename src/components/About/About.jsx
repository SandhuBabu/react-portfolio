import React from 'react'
import './about.css'
import Me from '../../assets/pic3.png'
import { FaAward, FaUsers } from 'react-icons/fa'
import { BsFillFileEarmarkCodeFill as Code } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={Me} alt="me" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>30+ Clients</small>
            </article>

            <article className="about__card">
              <Code className='about__icon' />
              <h5>Projects</h5>
              <small>25+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magnam unde quae porro? Quae cupiditate optio soluta quisquam animi voluptates.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
