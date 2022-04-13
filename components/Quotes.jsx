import React from "react";

// swiperjs
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Quotes() {
  const quotes = [
    {
      avatar: "/assets/avatar-1.png",
      name: "Javascript",
      review:
        "In Javascript, there is a beautiful, elegant, highly expressive language that is buried under a streaming pile of good intentions and blunders.",
    },
    {
      avatar: "/assets/avatar-2.jpg",
      name: "Andrew Hunt",
      review:
        "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
    },
    {
      avatar: "/assets/avatar-3.jpg",
      name: "Ada Lovelace",
      review:
        "The more I study, the more insatiable do I feel my genius for it to be.",
    },
    {
      avatar: "/assets/avatar-4.jpg",
      name: "Dave",
      review: "Programming is not stressful at all. Zucy - 24 years old",
    },
  ];

  return (
    <section id="quotes" className="quotes">
      <h5>Recent Quotes</h5>
      <h2>Quotes</h2>
      <Swiper
        className="container quotes__container"
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
        {quotes.map((quote, idx) => (
          <SwiperSlide key={idx}>
            <article className="quote">
              <div className="client__avatar">
                <img src={quote.avatar} alt={quote.name} />
              </div>
              <h5 className="client__name">{quote.name}</h5>
              <small className="client__review">{quote.review}</small>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Quotes;
