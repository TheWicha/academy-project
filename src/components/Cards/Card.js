import React from "react";
import styled from "styled-components";

const Card = ({ photo, title, text, name }) => {
  return (
    <CardContainter className={name}>
      <CardImg src={photo} alt="learning" />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainter>
  );
};

export default Card;
// background-color: #f1f4f957;
const CardContainter = styled.div`
  border-radius: 10px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: white;
  &:hover {
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.03);
  }
  transition: all 0.7s;


`;

const CardImg = styled.img`
  padding-top: 5px;
  width: 100%;
  height: 220px;
`;

const CardTitle = styled.h3`
  color: #3c4852;
  padding: 20px;
  margin-top: 10px;
  font-size: clamp(23px, 3vw, 32px);
`;
const CardText = styled.p`
  width: 70%;
  color: #3c4852;
  font-size: 14px;
  margin-bottom: 30px
`;
