import React from "react";
import styled from "styled-components";
import Card from "./Card";
import img1 from "../../imgs/schedule.svg";
import img2 from "../../imgs/world.svg";
import img3 from "../../imgs/anywhere.svg";
import img4 from "../../imgs/chatting.svg";
import img5 from "../../imgs/voting.svg";
import img6 from "../../imgs/doubts.svg";

const Cards = () => {
  return (
    <StyledSection>
      <CardsWrapper>
        <TitleContainer>
          <StyledSticky>
            <CardTitle>
              The best way to
              <br /> prepare for IIT JEE
            </CardTitle>
            <Link href="/">Get subscription</Link>
          </StyledSticky>
        </TitleContainer>
        <CardsContainer>
          <Card
            photo={img1}
            title={"Schedule that works for you"}
            text={
              "Enroll in unlimited courses, get a personalised schedule and never miss a live class with our timely reminders."
            }
          />
          <Card
            name="middle-card"
            photo={img2}
            title={"No Language barrier"}
            text="Our educators teach in English, Hindi, Malayalam, Tamil and 12 other languages, so language is never a barrier."
          />
          <Card
            photo={img3}
            title={"Learn anytime, anywhere"}
            text="Watch our recorded classes, online or offline from the comfort of your mobile, PC or tablet."
          />
        </CardsContainer>
      </CardsWrapper>
      <CardsWrapper>
        <TitleContainer>
          <StyledSticky>
            <CardTitle>
              Feels like you are in <br />
              the classroom
            </CardTitle>
            <Link href="/">Get subscription</Link>
          </StyledSticky>
        </TitleContainer>
        <CardsContainer>
          <Card
            photo={img4}
            title={"Interact with your educator"}
            text={
              "Chat with the educator, engage in discussions and ask your questions - all while the class is going on."
            }
          />
          <Card
            name="middle-card"
            photo={img5}
            title={"Answer live polls"}
            text="Participate in live polls by the educator in class and compete for a place in the leaderboard."
          />
          <Card
            photo={img6}
            title={"Get your doubts cleared"}
            text="Ask your doubts and get them answered immediately by the educator during classes."
          />
        </CardsContainer>
      </CardsWrapper>
    </StyledSection>
  );
};

export default Cards;
const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12em;
  @media screen and (max-width: 767px) {
    justify-content: center;
    margin-top: 5em;
    align-items: center;
    flex-direction: column;
  }
`;
const CardsContainer = styled.div`
  margin-top: 3em;
  padding-bottom: 2em;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;
const CardTitle = styled.h1`
  font-size: clamp(28px, 3vw, 39px);
  font-weight: bold;
  color: rgb(60, 72, 82);
  padding-top: 1em;
  line-height: 120%;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;
const TitleContainer = styled.div`
  width: 46%;
  @media screen and (max-width: 767px) {
    width: 59%;
  }
`;

const Link = styled.a`
  color: #9adefe;
  cursor: pointer;
  font-size: clamp(19px, 2vw, 22px);
  font-weight: 600;
  text-decoration: underline;
  &:hover {
    color: #9adefe;
  }
`;

const StyledSticky = styled.div`
  text-align: left;
  position: sticky;
  top: 0;
`;
