import Carousel from 'react-bootstrap/Carousel'
import carousel1 from '../Images/carousel-1.jpg'
import carousel2 from '../Images/carousel-2.jpg'
import carousel3 from '../Images/carousel-3.jpg'
import React from "react";

export const HomePageCarousel = () => {
  return (
    <div class="HomePageCarousel">
      <Carousel>
        <Carousel.Item>
          <img
            src = {carousel1}
            className="d-block w-100"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>ADDIDAS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, id?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src = {carousel2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>P.F FLYERS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src = {carousel3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>NIKE</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, nobis!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
