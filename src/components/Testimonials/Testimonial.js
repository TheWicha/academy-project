import React from "react";
import styled from "styled-components";

const Testimonial = ({ time, text, name, photo }) => {
  return (
    <CardContainter>
      <ImgWrapper>
        <CardTop></CardTop>
      </ImgWrapper>
      <CardImg src={photo} />
      <div style={{padding: '13%'}}>
        <CardText>{text}</CardText>
        <UserContainer>
          <UserName>{name}</UserName>
          <UserRating>IIT JEE</UserRating>
        </UserContainer>
        <UserTime>{time}</UserTime>
      </div>
    </CardContainter>
  );
};

export default Testimonial;
const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

const CardContainter = styled.div`
  border-radius: 10px;
  width: 500px;
  display: flex;

  margin: 15px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: white;
  &:hover {
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.03);
  }
  transition: all 0.7s;
`;

const ImgWrapper = styled.div`
  border-bottom: 1px solid #9aafbf;
  width: 100%;
`;

const CardTop = styled.div`
  height: 120px;    
`;
const CardImg = styled.img`
  background-color: #fff;
  padding: 5px;
  margin-top: -90px;
  padding-top: 5px;
  border-radius: 160px;
  border: 1px solid #9aafbf;
`;

const UserName = styled.h3`
  font-weight: bold;
  color: #3c4852;
  font-size: clamp(16px, 3vw, 18px);
  margin: 0;
`;
const UserRating = styled.p`
  font-size: clamp(12px, 3vw, 16px);
  margin: 0;
  color: #9aafbf;
`;

const UserTime = styled.p`
  text-align: right;
  width: 100%;
  color: #9aafbf;
  font-size: clamp(12px, 3vw, 16px);
  @media screen and (max-width: 367px) {
    text-align: left;
  }
`;

const CardText = styled.p`
  text-align: left;
  width: 100%;
  color: #3c4852;
  font-size: clamp(12px, 3vw, 16px);
  margin-bottom: 80px;
`;
