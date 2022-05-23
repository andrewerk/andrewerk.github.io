import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import recipes from './../recipe-app.webp'
import trybewallet from './../trybewallet.png'

function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="flex flex-col">
        <a href="https://wallet-nine-bice.vercel.app/">
        <img
          className="h-20 d-block md:h-80 mx-auto d-block my-3"
          src={ trybewallet }
          alt="First slide"
        />
        <Carousel.Caption className="mt-20 text-xl">
          <h3 className="text-gray-dark">Expenses Wallet</h3>
          <p className="text-gray-dark">Expenses records in differents currencies from a API</p>
        </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://recipes-app-inky-rho.vercel.app/">
        <img
          className="h-20 d-block md:h-80 mx-auto d-block  my-3"
          src={ recipes }
          alt="Third slide"
        />

        <Carousel.Caption className="mt-20 text-xl">
          <h3>Recipes App</h3>
          <p>
            Web Application with numerous recipes from the API's MealDB and the DrinkDB
          </p>
        </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectsCarousel