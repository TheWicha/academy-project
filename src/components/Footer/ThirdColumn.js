import React from "react";
import styled from "styled-components";
import play from "../../imgs/google-play.svg";
import app from "../../imgs/app-store.svg";
const ThirdColumn = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <StyledTitle>LEARNER APP</StyledTitle>
        <ButtonContainer>
          <a href="/">
            <StyledImg src={play} alt="google play button"></StyledImg>
          </a>
          <a href="/">
            <StyledImg src={app} alt="App Store button"></StyledImg>
          </a>
        </ButtonContainer>
      </StyledContainer>
      <StyledContainer>
        <StyledTitle>EDUCATOR APP</StyledTitle>
        <ButtonContainer>
          <a href="/">
            <StyledImg src={play} alt="google play button"></StyledImg>
          </a>
          <a href="/">
            <StyledImg src={app} alt="App Store button"></StyledImg>
          </a>
        </ButtonContainer>
      </StyledContainer>
    </Wrapper>
  );
};

export default ThirdColumn;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 30px;
  padding-bottom: 40px;
`;
const StyledTitle = styled.p`
  font-size: 12px;
  color: #808080;
`;

const Wrapper = styled.div`
  display: flex;
  width: 330px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  width: 95%;
  margin-top: 20px;
`;
