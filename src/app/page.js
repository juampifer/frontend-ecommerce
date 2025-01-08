import ProductsPage from "./(features)/products/page";
import OwlCarousel from "./(features)/owl-carousel/OwlCarousel";
import HomeImg from "./(features)/home-img/HomeImg";
import React from "react";

const Home = () => {
  return (
    <main>
      <HomeImg />
      <OwlCarousel />
      <ProductsPage />
    </main>
  );
};

export default Home;
