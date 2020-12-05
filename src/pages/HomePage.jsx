import React from "react";
import { NavbarM } from "../Components/Navbar";
import { HomePageCarousel } from "../Components/HomePageCarousel";
import { FeaturedCol } from "../Components/FeaturedCol";
import { Gallery } from "../Components/Gallery";
import { Footer } from "../Components/Footer";

export const HomePage = () => {
  return (
    <div className="App">
      <NavbarM />
      <HomePageCarousel />
      <FeaturedCol />
      <Gallery />
      <Footer />
    </div>
  );
};
