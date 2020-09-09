import React from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

const Head = styled.header`
  height: 72px;
  width: 100%;
  padding-top: 40px;
  @media screen and (max-width: 500px){
    padding-top: 10px;
  }
`;

const Header = () => {
  return (
    <Head>
      <Navbar />
    </Head>
  );
};

export default Header;
