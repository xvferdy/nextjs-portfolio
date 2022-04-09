import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  const testimonials = [
    {
      avatar: "/assets/avatar1-ori.jpg",
      name: "Zhark Klmuztpota",
      review:
        "Sint velit eiusmod aliqua tempor sunt occaecat voluptate deserunt mollit occaecat dolor enim fugiat ullamco. Aliqua deserunt labore reprehenderit dolore laborum minim do ad, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic fugiat doloremque.",
    },
    {
      avatar: "/assets/avatar2-ori.jpg",
      name: "Loenadrud Kop",
      review:
        "Sint velit eiusmod aliqua tempor sunt occaecat voluptate deserunt mollit occaecat dolor enim fugiat ullamco. Aliqua deserunt labore reprehenderit dolore laborum minim do ad, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic fugiat doloremque.",
    },
    {
      avatar: "/assets/avatar3-ori.jpg",
      name: "Hip",
      review: "SERVIDORA!",
    },
    {
      avatar: "/assets/avatar4-ori.jpg",
      name: "Und Er Zkiliwa",
      review:
        "Sint velit eiusmod aliqua tempor sunt occaecat voluptate deserunt mollit occaecat dolor enim fugiat ullamco. Aliqua deserunt labore reprehenderit dolore laborum minim do ad, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic fugiat doloremque.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h5>Review From Clients </h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <h5 className="client__name">{testimonial.name}</h5>
              <small className="client__review">{testimonial.review}</small>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    // <section id="testimonials">
    //   <h5>Review from clients</h5>
    //   <h2>Testimonials</h2>

    //   <Swiper
    //     className="container testimonials__container"
    //     modules={[Pagination]}
    //     spaceBetween={40}
    //     slidesPerView={1}
    //     pagination={{ clickable: true }}
    //   >
    //     {data.map(({ avatar, name, review }, index) => {
    //       return (
    //         <SwiperSlide key={index}>
    //           <div className="testimonials">
    //             <div className="client__avatar">
    //               <img src={avatar} alt="client avatars" />
    //             </div>
    //             <h5 className="client__name">{name}</h5>
    //             <small className="client__review">{review}</small>
    //           </div>
    //         </SwiperSlide>
    //       );
    //     })}
    //   </Swiper>
    // </section>
  );
}

export default Testimonials;
