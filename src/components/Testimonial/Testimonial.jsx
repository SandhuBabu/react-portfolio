import React from 'react'
import './testimonial.css'

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const data = [
    {
      avatar: 'https://3.bp.blogspot.com/-Fr5e30L_kgU/U5XlsFsJJ_I/AAAAAAAAAII/clUbJmgle8U/s1600/TomJerry.jpg',
      name: 'Client 1'
    },
    {
      avatar: 'https://3.bp.blogspot.com/-Fr5e30L_kgU/U5XlsFsJJ_I/AAAAAAAAAII/clUbJmgle8U/s1600/TomJerry.jpg',
      name: 'Client 2'
    },
    {
      avatar: 'https://3.bp.blogspot.com/-Fr5e30L_kgU/U5XlsFsJJ_I/AAAAAAAAAII/clUbJmgle8U/s1600/TomJerry.jpg',
      name: 'Client 3'
    },
    {
      avatar: 'https://3.bp.blogspot.com/-Fr5e30L_kgU/U5XlsFsJJ_I/AAAAAAAAAII/clUbJmgle8U/s1600/TomJerry.jpg',
      name: 'Client 4'
    },
    {
      avatar: 'https://3.bp.blogspot.com/-Fr5e30L_kgU/U5XlsFsJJ_I/AAAAAAAAAII/clUbJmgle8U/s1600/TomJerry.jpg',
      name: 'Client 5'
    },
    {
      avatar: 'https://3.bp.blogspot.com/-Fr5e30L_kgU/U5XlsFsJJ_I/AAAAAAAAAII/clUbJmgle8U/s1600/TomJerry.jpg',
      name: 'Client 6'
    },
  ]
  return (
    <section id='testimonial'>
      <h5>Review From Client's</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{clickable:true}}
        className="container testimonial__container">

        {
          data.map((obj, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={obj.avatar} alt="" />
                </div>
                <h5 className="client__name">{obj.name}</h5>
                <small className='client__review'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam molestiae id, sequi vero neque officia amet accusantium nisi impedit sapiente ullam accusamus, magnam non veniam.
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonial
