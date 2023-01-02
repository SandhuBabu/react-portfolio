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
      avatar: 'https://imgs.search.brave.com/b5GZhsCs83LjBR_U9rHBq5LLSy4b7acOW4dpy8JZa7E/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/QzBVcWFycF9NWkM2/MHhjV3VpQTVRSGFI/YSZwaWQ9QXBp',
      name: 'Prithviraj Sukumaran'
    },
    {
      avatar: 'https://scontent.ccdn.cloud/image/nospoiler/7d72fedc-f6a1-4e68-9384-b9eda5acbe5a/asif-ali-630x630.jpg',
      name: 'Asif Ali'
    },
    {
      avatar: 'https://1.bp.blogspot.com/-6iQDnrkilgc/XWgAhREmnRI/AAAAAAAAi4E/h4bwwYewJzILaYAjJxA8HOFBvvGhfqLSwCLcBGAs/s1600/AR-160329719.jpg%2526NCS_modified%253D%2526imageversion%253D1by1%2526exif%253D.jpg',
      name: 'Nivin Pauly'
    },
    {
      avatar: 'https://imgs.search.brave.com/J7yshIUsDmn-aLPb7qSzxR4wSaJv0TAfASOnVWpEc4g/rs:fit:379:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/SmtNSUQtUnkzLVNP/YW9UdklqTFZ3SGFK/USZwaWQ9QXBp',
      name: 'Tovino Thomas'
    },
    {
      avatar: 'https://indianewengland.com/wp-content/uploads/2019/09/Dulquer-Salmaan-696x696.jpg',
      name: 'Dulquer Salmaan'
    },
    {
      avatar: 'http://www.cineshowcase.com/wp-content/uploads/2014/10/fahad-fazil-0071.jpg',
      name: 'Fahadh Faasil'
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
