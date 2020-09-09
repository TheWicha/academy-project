import React from "react";
import styled from "styled-components";
import phone from "../../imgs/mobile.svg";
import play from "../../imgs/google-play.svg";
import app from "../../imgs/app-store.svg";

const Playstore = () => {
  return (
    <StyledSection>
      <Wrapper>
        <TextContainer>
          <h1>Learn on the go</h1>
          <p>
            Download lessons and learn anytime, anywhere with the Unacademy
            learning app
          </p>
          <ButtonContainer>
            <a href="/">
              <StyledImg src={play} alt="google play button"></StyledImg>
            </a>
            <a href="/">
              <StyledImg src={app} alt="App Store button"></StyledImg>
            </a>
          </ButtonContainer>
        </TextContainer>
      </Wrapper>
    </StyledSection>
  );
};

export default Playstore;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  
  margin-top: 40px;
  @media screen and (min-width: 1000px) {
    width: 56%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 60%;
  }
  @media screen and (max-width: 370px) {
    width: 100%;
  }
`;

const StyledImg = styled.img`
  width: 95%;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  margin-bottom: 8em;
  margin-top: 8em;
  border-radius: 6px;
  box-shadow: 4px 5px 7px 1px rgba(0, 0, 0, 0.02);
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-position-x: 534px;
  background-position-y: 55px;
  background-size: 41%;
  @media screen and (max-width: 990px) {
    background-position-x: 372px;
    background-position-y: 115px;
  }
  @media screen and (max-width: 767px) {
    background-position-x: 261px;
    background-position-y: 55px;
  }
  @media screen and (max-width: 500px) {
    background-position-x: 290px;
    padding-top: 20px;
  }
`;

const Wrapper = styled.div`
  height: 330px;
  display: flex;
  justify-content: space-around;
  width: 50%;
  padding: 20px 0 0 20px;
  @media screen and (max-width: 500px) {
    width: 85%;

  }
`;
const TextContainer = styled.div`
  text-align: left;
  margin-top: 30px;
  margin-left: 50px;
  h1 {
    font-size: clamp(28px, 3vw, 39px);
    line-height: 120%;
    color: rgb(60, 72, 82);
    font-weight: bold;
  }
  p {
    font-size: clamp(17px, 2vw, 20px);
    line-height: 150%;
    color: rgb(60, 72, 82);
    margin: 24px 0px 0px;
    font-weight: normal;
    width: 75%;
    @media screen and (max-width: 767px) {
        width: 100%;
      }
      @media screen and (max-width: 500px) {
        width: 75%;
      }
      @media screen and (max-width: 330px) {
        width: 100%;
      }
  }
  @media screen and (max-width: 767px) {
    margin-left: 13px;
  }
  @media screen and (max-width: 500px) {
    margin: 0px;
  }
`;
