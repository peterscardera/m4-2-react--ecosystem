import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import styled, { keyframes } from "styled-components";

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Title>Fruit Emporium</Title>
        <LogoImg src={Logo} />
        <HeaderLinks>
          <Link to="/">
            {" "}
            <Nav>Home</Nav>{" "}
          </Link>
          <Link to="/sellers">
            <Nav>Sellers</Nav>
          </Link>
          <Link to="/about">
            {" "}
            <Nav>About</Nav>
          </Link>
        </HeaderLinks>
      </StyledHeader>
    </Container>
  );
};

const rotate360 = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;
const LogoImg = styled.img`
  width: 70px;
  height: 70px;
  animation: ${rotate360} infinite 30s linear;
  &:hover {
    animation: ${rotate360} infinite 2s linear;
  }
`;

const Nav = styled.span`
  color: darkgrey;
  text-decoration: none;
  
  margin: 10px;
`;

const Container = styled.div`

  width: 95vw;
  a {
    text-decoration: none;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 2rem;
`;

const StyledHeader = styled.header`
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

const HeaderLinks = styled.div`
  display: flex;
  justify-content: end;
`;

export default Header;
