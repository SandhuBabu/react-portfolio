import React from 'react'
import {MdLibraryAddCheck} from 'react-icons/md'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <MdLibraryAddCheck className='service__list_icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
