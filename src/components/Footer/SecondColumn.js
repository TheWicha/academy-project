import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 230px;
  padding-bottom: 40px;
`;

const StyledLink = styled.a`
  color: #3c4852;
  font-size: 12px;
  display: flex;
  transition: all 200ms ease;
  cursor: pointer;
  padding-bottom: 10px;
  &:hover {
    text-decoration: none;
    color: #9adefe;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 300px;
  @media screen and (max-width: 300px) {
    flex-wrap: wrap;
  }
`;

const SecondColumn = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <StyledLink href="/" rel="noopener noreferrer" target="blank">
          About Us
        </StyledLink>
        <StyledLink href="/" rel="noopener noreferrer" target="blank">
          Careers
        </StyledLink>
        <StyledLink href="/" rel="noopener noreferrer" target="blank">
          Blogs
        </StyledLink>
        <StyledLink href="/" rel="noopener noreferrer" target="blank">
          Privacy Policy
        </StyledLink>
        <StyledLink href="/" rel="noopener noreferrer" target="blank">
          Terms and Conditions
        </StyledLink>
      </StyledContainer>
      <StyledContainer>
        <StyledLink href="/" rel="noopener noreferrer" target="blank">
          User Guidelines
        </StyledLink>
        <StyledLink href="/" rel="noopener noreferrer" target="blank">
          Site Map
        </StyledLink>
        <StyledLink href="/" rel="noopener noreferrer" target="blank">
          Refund Policy
        </StyledLink>
        <StyledLink href="/" rel="noopener noreferrer" target="blank">
          Legal Notes
        </StyledLink>
        <StyledLink href="/" rel="noopener noreferrer" target="blank">
          Plus subscriptions T&C
        </StyledLink>
      </StyledContainer>
    </Wrapper>
  );
};

export default SecondColumn;
