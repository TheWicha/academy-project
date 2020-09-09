import styled from "styled-components";
import { Button } from "react-bootstrap";

export const Hero = styled.div`
  height: 385px;
  margin-top: 10em;
  display: flex;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-top: 4em;
    justify-content: center;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 3em;
  }
`;

export const Carusele = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;

export const CaruseleTextOne = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: clamp(40px, 3vw, 56px);
  line-height: 120%;
  color: rgb(60, 72, 82);
  align-self: baseline;
  animation: slide-right 4s linear infinite normal;
  opacity: 0;
  @keyframes slide-right {
    0% {
      transform: translateX(-18px);
      opacity: 0;
    }
    20% {
      transform: translateX(0px);
      opacity: 1;
    }
    40% {
      transform: translateX(0px);
      opacity: 1;
    }

    60% {
      transform: translateY(-18px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const CaruseleTextTwo = styled(CaruseleTextOne)`
  margin-top: -135px;
  animation: slide-left 4s linear infinite normal 2.3s;
  opacity: 0;
  @keyframes slide-left {
    0% {
      transform: translateX(18px);
      opacity: 0;
    }
    15% {
      transform: translateX(0px);
      opacity: 1;
    }
    33% {
      transform: translateX(0px);
      opacity: 1;
    }

    50% {
      transform: translateX(-18px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const SecondaryText = styled.div`
  font-size: clamp(15px, 3vw, 32px);
  line-height: 120%;
  color: rgb(154, 175, 191);
  font-weight: normal;
  margin: 47px 0px 0px;
  text-align: initial;
`;

export const StyledButton = styled(Button)`
  width: 164px;
  height: 70px;
  font-size: clamp(10px, 2vw, 20px);
  margin-top: 75px;
  background-color: #00b0ff;
  border: none;

  @media screen and (max-width: 767px) {
    width: 124px;
    height: 40px;
    margin-top: 18px;
  }
  @media screen and (max-width: 500px) {
    width: 90px;
    height: 40px;
  }
`;

export const Buttton = styled.button`
  font-size: clamp(10px, 3vw, 20px);
  padding: 18px 32px;
  font-weight: bold;
  cursor: pointer;
  width: clamp(100px, 2.5vw, 300px);
  color: #fff;
  background-color: #00b0ff;
  border-width: initial;
  border-style: none;
  border-radius: 4px;
  margin-top: 75px;
  z-index: 1;
  @media screen and (max-width: 600px) {
    width: 20%;
    padding: 10px 10px;
    font-size: 10px;
  }
`;
export const Links = styled.div`
  text-align: initial;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    margin-top: 100px;
  }
`;

export const Goals = styled.span`
  font-size: 18px;
  line-height: 150%;
  color: rgb(128, 128, 128);
  padding-right: 12px;
  font-family: AvertaStd, -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const Link = styled.a`
  font-size: 16px;
  line-height: 150%;
  font-weight: 700;
  color: #00b0ff;
  padding-right: 12px;
  text-decoration: none;
  underline: none;
  &:hover {
    color: #00b0ff;
    text-decoration: none;
  }
`;

export const CircleWrapper = styled.div`
  margin-top: -15px;
  text-align: left;
  @media screen and (max-width: 767px) {
    margin-right: 0px;
    margin-top: 0px;
  }
`;

export const Circle = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
  }
  width: 100%;
  border-radius: 6px;
  margin-bottom: 30px;
  background-color: white;
  animation: scaleUp 7s linear infinite normal;
  @keyframes scaleUp {
    5% {
      transform: scale(1.1);
    }

    10% {
      transform: scale(1.1);
    }
    15% {
      transform: scale(1);
    }
  }
`;

export const CircleTwo = styled(Circle)`
  animation: scaleUp2 7s linear infinite normal;
  @keyframes scaleUp2 {
    20% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    30% {
      transform: scale(1.1);
    }
    35% {
      transform: scale(1);
    }
  }
`;
export const CircleThree = styled(Circle)`
  animation: scaleUp3 7s linear infinite normal;
  @keyframes scaleUp3 {
    40% {
      transform: scale(1);
    }
    45% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.1);
    }
    55% {
      transform: scale(1);
    }
  }
`;
export const IconText = styled.span`
  margin-left: 35px;
  font-size: clamp(1rem, 2.5vw, 1.8rem);
  color: rgb(60, 72, 82);
  letter-spacing: 2px;
  font-weight: 600;
  span {
    padding-left: 3px;
  }
`;

export const Img = styled.img`
width: clamp(70px, 5vw, 80px);
  margin-left: 25%;
  padding: 15px;
  @media screen and (max-width: 1000px) {
    margin-left: 3%;
  }
`;
