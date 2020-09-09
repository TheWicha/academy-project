import React from 'react';
import {
    CircleThree,
    CircleWrapper,
    Circle,
    IconText,
    Img,
    CircleTwo,
  } from "./styles";
  import school from "../../imgs/school.svg";
  import head from "../../imgs/brain.svg";
  import academy from "../../imgs/academy.svg";

const AnimatedBox = () => {
    return(
        <CircleWrapper>
        <Circle>
          <Img src={school} alt="teacher with students" />
          <IconText>Live <span>classes!</span></IconText>
        </Circle>
        <CircleTwo>
          <Img src={head} alt="teacher with students" />
          <IconText>Learn <span>anytime!</span></IconText>
        </CircleTwo>
        <CircleThree>
          <Img src={academy} alt="teacher with students" />
          <IconText>Best <span>teachers!</span></IconText>
        </CircleThree>
      </CircleWrapper>
    )
}

export default AnimatedBox;