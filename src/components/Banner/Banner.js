import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import banner1 from "../../Images/Banner/Banner2.jpg"
import banner2 from "../../Images/Banner/Banner3.jpg"
import banner3 from "../../Images/Banner/Banner4.jpg"

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {banner2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>WELCOME TO TONMOY'S MEDIC</h3>
            <p>Always ready to serve </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>WELCOME TO TONMOY'S MEDIC</h3>
            <p>Always ready to serve </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>WELCOME TO TONMOY'S MEDIC</h3>
            <p>
            Always ready to serve 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
