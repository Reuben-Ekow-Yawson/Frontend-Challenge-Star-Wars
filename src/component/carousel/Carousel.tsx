import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./carousel.css";
import Image from "react-bootstrap/Image";
import { images } from "./CarouselImages";


const CarouselComponent: React.FC = () => {
  return (
    <Container className="carousel">
      <Carousel fade>
        {images.map((img) => (
          <Carousel.Item key={img.id} className='wrapper'>
            <Image src={img.image} alt="A-Family-at-War" className="starWar" />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;
