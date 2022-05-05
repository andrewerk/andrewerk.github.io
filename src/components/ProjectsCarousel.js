import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import frontend from './../frontend.png'
import recipes from './../recipes.png'
import trybewallet from './../trybewallet.png'

function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <a href="https://wallet-nine-bice.vercel.app/">
        <img
          className="d-block w-50 mx-auto d-block my-3"
          src={ trybewallet }
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Trybe Wallet</h3>
          <p>Expenses records in differents currencies connected to XXX API</p>
        </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-45 mx-auto d-block  my-3"
          src={ frontend }
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>FrontEnd Online Store</h3>
          <p>Online Store with Mercado Livre API</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto d-block  my-3"
          src={ recipes }
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Recipes App</h3>
          <p>
            Web Application with numerous recipes from the API's MealDB and the DrinkDB
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectsCarousel