import React from "react";
import styled from "styled-components";
import logo from "../../imgs/logo.png";

const Navbar = () => {
  return (
    <Navibar>
      <Link href="/">
        <img src={logo} alt="company logo" />
      </Link>
      <Button>Login</Button>
    </Navibar>
  );
};

export default Navbar;


const Navibar = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;

`;

const Link = styled.a`
  line-height: 150%;
  font-size: 12px;
  align-self: center;
  height: 24px;
`;

const Button = styled.button`
align-self: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
cursor: pointer;
width: 80px;
height: 40px;
color: #fff;
background-color: #00B0FF;
border-style: none;
border-radius: 4px;
`