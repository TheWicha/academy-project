import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import img1 from "../../imgs/client1.png";
import img2 from "../../imgs/client2.png";
import img3 from "../../imgs/client3.png";
import img4 from "../../imgs/client4.png";
import img5 from "../../imgs/client5.png";
import img6 from "../../imgs/client6.png";

const ClientsMobile = () => {
  return (
    <StyledSection>
      <Title>Our Clients</Title>
      <Carousel>
        <Carousel.Item>
          <ClientImg src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientImg src={img2} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientImg src={img3} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientImg src={img4} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientImg src={img5} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientImg src={img6} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientImg src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientImg src={img2} />
        </Carousel.Item>
      </Carousel>
    </StyledSection>
  );
};

const ClientImg = styled.img``;
const Title = styled.h1`
margin-bottom: 50px;
font-size: clamp(28px,3vw,39px);
font-weight: bold;
color: rgb(60,72,82);
padding-top: 1em;
line-height: 120%;
align-text: center;
width: 100%;
}
`;
const StyledSection = styled.section`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8em;
  margin-top: 8em;
`;


export default ClientsMobile;
