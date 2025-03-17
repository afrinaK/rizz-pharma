import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ShopByCategory.css"; // Custom CSS for styling

const API_KEY = "EuPLXdspc0yRiFMW0DdVyFGpJOs3yooWJROLh3AMcTdqFqhn81hR4nfR"; // Replace with your actual API key
const BASE_URL = "https://api.pexels.com/v1/search?query=";

const categoryNames = [
  { title: "Weight Loss", size: "small" },
  { title: "Medicine", size: "tall" },
  { title: "Brain Health", size: "small" },
  { title: "Gym", size: "tall" },
  { title: "Sports Performance", size: "small" },
  { title: "Beauty and Hair Loss", size: "tall" },
];

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedCategories = await Promise.all(
        categoryNames.map(async (category) => {
          try {
            const response = await axios.get(`${BASE_URL}${category.title}&per_page=1`, {
              headers: { Authorization: API_KEY },
            });

            return {
              title: category.title,
              image: response.data.photos[0]?.src.medium || "/default-image.jpg",
              size: category.size, // Use manually assigned size
            };
          } catch (error) {
            console.error("Error fetching images:", error);
            return { title: category.title, image: "/default-image.jpg", size: category.size };
          }
        })
      );

      setCategories(fetchedCategories);
    };

    fetchImages();
  }, []);

  return (
    <div className="container my-5">
      <div className="category">
        <h2 className="text-center shop-by-title">
          <strong>Shop By</strong> <span className="text-warning">Category</span>
        </h2>

        <div className="category-container">
          {categories.map((category, index) => (
            <div
            key={index}
            className={`category-card ${category.size}`}
            style={{
              height: category.title === "Sports Performance" ? "300px" : index % 2 === 0 ? "300px" : "200px",
              marginTop: category.title === "Sports Performance" ? "-100px" : "0px",
            }}
          >
              <img
                src={category.image}
                className="card-img-top"
                alt={category.title}
              />
              <div className="card-body">
                <h5 className="card-title">{category.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
