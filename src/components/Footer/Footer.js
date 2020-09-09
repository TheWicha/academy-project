import React from "react";
import styled from "styled-components";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
import { Container } from "react-bootstrap";
import ThirdColumn from "./ThirdColumn";

const StyledFooter = styled.footer`
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <FirstColumn />
        <SecondColumn />
        <ThirdColumn />
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
