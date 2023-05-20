import React from 'react'
import "./testimonials.css";
import AVIR1 from '../../asssets/avatar1.jpg'
import AVIR2 from '../../asssets/avatar2.jpg'
import AVIR3 from '../../asssets/avatar3.jpg'
import AVIR4 from '../../asssets/avatar4.jpg'

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const data = [
  {
    avatar: AVIR1,
    name: "Tina Slow",
    review: "Moti alias animi dolorem alipam ea beaherlorem Moti alias animi dolorem alipam ea  beaherlore Moti alias animi dolorem alipam ea beaherlore",
  },
  {
    avatar: AVIR2,
    name: "Shate Vale",
    review: "Moti alias animi dolorem alipam ea beaherlorem Moti alias animi dolorem alipam ea  beaherlore Moti alias animi dolorem alipam ea beaherlore",
  },
  {
    avatar: AVIR3,
    name: "Khate Despite",
    review:"Moti alias animi dolorem alipam ea beaherlorem Moti alias animi dolorem alipam ea  beaherlore Moti alias animi dolorem alipam ea beaherlore",
  },
  {
    avatar: AVIR4,
    name: "Tina Slow",
    review:"Moti alias animi dolorem alipam ea beaherlorem Moti alias animi dolorem alipam ea  beaherlore Moti alias animi dolorem alipam ea beaherlore",
  },
];




const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clientes</h5>
      <h2>testimonials</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
         modules={[ Pagination ]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
       
      >
        {
          data.map(({avatar,name, review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                   <img src={avatar} alt="Avatar One" />
                   <h5 className='client__name'>{name}</h5>
                </div>
                   <small className='client__review'>{review}</small>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
      
    </section>
  )
}

export default Testimonials