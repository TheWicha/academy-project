import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../imgs/carusele1.svg";
import img2 from "../../imgs/carusele2.svg";
import AnimatedBox from "./AnimatedBox";
import styled from 'styled-components'


const StyledCarusel = styled(Carousel)`
margin-left: 5px;
width: 640px;
opacity: 0.7;

@media screen and (max-width: 767px){
  width: 300px;
  margin-top: 30px;
}
`

const Carusel = () => {
  return (
    <StyledCarusel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" style={{marginTop: '-42px'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-block w-100 ABox">
          <AnimatedBox />
        </div>
      </Carousel.Item>
    </StyledCarusel>
  );
};

export default Carusel;
