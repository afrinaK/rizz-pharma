import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import ShopByCategory from "./components/ShopByCategory";
import FeaturesSection from "./components/FeaturesSection";
import HealthGoals from "./components/HealthGoals";
import Testimonials from "./components/Testimonials.jsx";
import Tail from "./components/Tail.jsx";
import "./App.css";
import ImageSection from "./components/ImageSection.jsx";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShopByCategory />
      <FeaturesSection />
      <HealthGoals />
      <ImageSection />
      <Testimonials />
      <Tail />
    </div>
  );
}

export default App;
