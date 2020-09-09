import React from "react";
import styled from "styled-components";
import logo from "../../imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const FirstColumn = () => {
  return (
    <StyledColumn>
      <StyledLogo src={logo} alt="company logo" />
      <IconsWrapper>
        <LinkWrapper>
          <StyledLink>
            <StyledIcon icon={faFacebookF} />
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink>
            <StyledIcon icon={faYoutube} />
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink>
            <StyledIcon icon={faTwitter} />
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink>
            <StyledIcon icon={faInstagram} />
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink>
            <StyledIcon icon={faLinkedinIn} />
          </StyledLink>
        </LinkWrapper>
      </IconsWrapper>
      <StyledAuthor>
        © 2020 created by{" "}
        <a
          style={{ color: "inherit" }}
          href="https://github.com/TheWicha"
          rel="noopener noreferrer"
          target="_blank"
        >
          Daniel Wisniewski
        </a>
      </StyledAuthor>
    </StyledColumn>
  );
};

export default FirstColumn;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  padding-bottom: 40px;
`;

const IconsWrapper = styled.div`
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const StyledLogo = styled.img`
  margin-left: -19px;
  margin-right: 29px;
  height: 25px;
  width: 170px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #3c4852;
  height: 10px;
`;

const StyledLink = styled.a`
  height: 30px;
`;

const LinkWrapper = styled.div`
  cursor: pointer;
  background-color: #f0f4f7;
  border-radius: 6px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  &:hover {
    background-color: #dde6ed;
  }
`;

const StyledAuthor = styled.p`
  font-size: 12px;
  margin: 0px;
  color: rgb(60, 72, 82);
  text-decoration: none;
  padding-top: 20px;
  width: 66%;
`;
