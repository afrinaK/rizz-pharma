import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HealthGoals.css"; // Your CSS file

const HealthGoals = () => {
  const [products, setProducts] = useState([]);
  const PEXELS_API_KEY = "kM6pDZDK5HALO3aDZHHrbTZ5Je3rF8Z2P59sKwKMULF4BSMBDoWtFciJ";
  const MOCK_API_URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/search?query=pills&per_page=12`, {
      headers: { Authorization: PEXELS_API_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(MOCK_API_URL)
          .then((res) => res.json())
          .then(() => {
            const combinedData = data.photos.map((photo, index) => ({
              id: photo.id,
              image: photo.src.medium,
              title: `Product ${index + 1}`,
              price: `$${(Math.random() * 100).toFixed(2)}`,
            }));
            setProducts(combinedData);
          });
      })
      .catch((err) => console.error(err));
  }, []);

  // **Carousel Settings**
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Shows 4 items per row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Show left/right arrows
    dots: false, // Hide navigation dots
    rows: 2, // Display two rows
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, rows: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, rows: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, rows: 2 },
      },
    ],
  };

  return (
    <div className="health-goals">
      <h1>
        Solutions For Your <span className="highlight">Unique</span> Health Goals
      </h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Best Selling", "Weight Loss", "Beauty", "Testosterone", "Sexual Health"].map((category) => (
          <button key={category} className="filter-btn">{category}</button>
        ))}
      </div>

      {/* **Product Carousel with Two Rows** */}
      <div className="carousel-container">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h4 className="product-title">{product.title}</h4>
              <div className="product-footer">
                <p className="product-price">{product.price}</p>
                <button className="cart-button">🛒</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HealthGoals;
