import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e948896757753.5eb58c727d672.png',
      title: 'Lorem ipsum dolor sit',
      github: 'https://github.com',
      demo: 'https://google.com'
    },
    {
      id: 2,
      image: 'https://cdn.dribbble.com/users/2193891/screenshots/9535419/media/ac2bfbe71a2680a8c893bd6ed4de8ee5.png',
      title: 'Lorem ipsum dolor sit',
      github: 'https://github.com',
      demo: 'https://google.com'
    },
    {
      id: 3,
      image: 'https://cdn.dribbble.com/users/748883/screenshots/6605184/ecommerce_mobile_app_2x.png',
      title: 'Lorem ipsum dolor sit',
      github: 'https://github.com',
      demo: 'https://google.com'
    },
    {
      id: 4,
      image: 'https://cdn.dribbble.com/users/1820876/screenshots/11118758/media/c39d44230f53c45ff1b132290e3e3650.png',
      title: 'Lorem ipsum dolor sit',
      github: 'https://github.com',
      demo: 'https://google.com'
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/originals/a3/8a/c6/a38ac697e770aaa0dd88492238612d7e.png',
      title: 'Lorem ipsum dolor sit',
      github: 'https://github.com',
      demo: 'https://google.com'
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/originals/48/03/9c/48039ce7a6586d1205d9a58721fb707b.png',
      title: 'Lorem ipsum dolor sit',
      github: 'https://github.com',
      demo: 'https://google.com'
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map((obj) => {
            return (
              <article key={obj.id} className='portfolio__item'>
                <div className="portfolio__item_image">
                  <img src={obj.image} alt="" />
                </div>
                <h3>{obj.title}</h3>
                <div className="portfolio__item_cta">
                  <a href={obj.github} target='_blank' className='btn'>Source Code</a>
                  <a href={obj.demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
