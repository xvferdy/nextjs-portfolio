import React from "react";

// swiperjs
import { Navigation, Pagination, Autoplay } from "swiper";
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
        "Deserunt mollit occaecat dolor enim fugiat ullamco. Aliqua deserunt labore reprehenderit dolore laborum minim do ad, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic fugiat doloremque.",
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
        "Sint velit eiusmod aliqua tempor mollit occaecat dolor enim fugiat ullamco. Aliqua deserunt labore reprehenderit dolore laborum minim do ad, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic fugiat doloremque.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h5>Review From Clients </h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
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
  );
}

export default Testimonials;
