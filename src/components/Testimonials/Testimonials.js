import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Testimonial from "./Testimonial";
import img1 from "../../imgs/75.jpg";
import img2 from "../../imgs/87.jpg";
import img3 from "../../imgs/81.jpg";
import img4 from "../../imgs/7.jpg";
import img5 from "../../imgs/86.jpg";
import img6 from "../../imgs/49.jpg";

const Testimonials = () => {
  return (
    <StyledSection>
      <Title>What our learners say about us</Title>
      <TestimonialsContainer>
        <Testimonial
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          }
          time={"1 month ago"}
          name={"Jeremy Wade"}
          photo={img1}
        />
        <Testimonial
          name={"Kaylee Peters"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          }
          time={"18 months ago"}
          photo={img3}
        />
        <Testimonial
          name={"Philip Howard"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          }
          time={"12 months ago"}
          photo={img4}
        />
        <Testimonial
          name={"Phillip Sanchez"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          }
          time={"9 months ago"}
          photo={img2}
        />
        <Testimonial
          name={"Bill Daniels"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          }
          time={"26 months ago"}
          photo={img5}
        />
        <Testimonial
          name={"Irma Morales"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          }
          time={"12 months ago"}
          photo={img6}
        />
      </TestimonialsContainer>
    </StyledSection>
  );
};

const Title = styled.h1`
font-size: clamp(28px,3vw,39px);
font-weight: bold;
color: rgb(60,72,82);
padding-top: 1em;
line-height: 120%;
align-text: center;
width: 100%;
margin-bottom: 90px;
}
`;
const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8em;
  margin-top: 8em;
`;

const TestimonialsContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default Testimonials;
