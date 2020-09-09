import React from "react";
import styled from "styled-components";
import { Container} from "react-bootstrap";
import img1 from "../../imgs/client1.png";
import img2 from "../../imgs/client2.png";
import img3 from "../../imgs/client3.png";
import img4 from "../../imgs/client4.png";
import img5 from "../../imgs/client5.png";
import img6 from "../../imgs/client6.png";

const Clients = () => {
  return (
    <StyledSection>
      <Title>Our Clients</Title>
      <ClientsContainer>
        <ClientImg src={img1} />
        <ClientImg src={img2} />
        <ClientImg src={img3} />
        <ClientImg src={img4} />
        <ClientImg src={img5} />
        <ClientImg src={img6} />
      </ClientsContainer>
      <ClientsContainer>
        <ClientImg src={img1} />
        <ClientImg src={img2} />
        <ClientImg src={img3} />
        <ClientImg src={img4} />
        <ClientImg src={img5} />
        <ClientImg src={img6} />
      </ClientsContainer>
    </StyledSection>
  );
};

const ClientImg = styled.img``;
const Title = styled.h1`
font-size: clamp(28px,3vw,39px);
font-weight: bold;
color: rgb(60,72,82);
padding-top: 1em;
line-height: 120%;
align-text: center;
width: 100%;
}
`;
const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8em;
  margin-top: 8em;
`;

const ClientsContainer = styled(Container)`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default Clients;
