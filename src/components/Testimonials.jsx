import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonials.css";

const testimonials = [
  {
    text: "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.",
    name: "John Williams",
    role: "Lead Designer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4,
  },
  {
    text: "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    text: "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.",
    name: "David Brown",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 3,
  },
];

const Testimonials = () => {
  const renderStars = (rating) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += i < rating ? "★" : "☆";
    }
    return stars;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Shows 3 testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <h2>
        Hear What <span className="highlight">Rizz</span> Patients Have To Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">“{testimonial.text}”</p>
            <div className="testimonial-footer">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
            <div className="stars">{renderStars(testimonial.rating)}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
