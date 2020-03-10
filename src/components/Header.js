import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.png";
import styled, { keyframes } from "styled-components";

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <LogoImg src={Logo} />
        <Title>Fruit Emporium</Title>

          <StyledDiv>
          <StyledLink to="/" exact activeStyle={{ color: "lightpink", borderBottom: "purple 2px solid"}}> Home </StyledLink>
          <StyledLink to="/sellers" exact activeStyle= {{color: "lightpink", borderBottom:"purple 2px solid"}}>Sellers</StyledLink>
          <StyledLink to="/about" exact activeStyle= {{color: "lightpink", borderBottom:"purple 2px solid"}}>About</StyledLink>
          </StyledDiv>
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
  width: 45px;
  height: 45px;
  animation: ${rotate360} infinite 30s linear;
  &:hover {
    animation: ${rotate360} infinite 2s linear;
  }
`;

const StyledLink = styled(NavLink)`
  color: palevioletred;
  font-weight: bold;
  padding: 9px;

  &:hover {
    transition: border-bottom .3s;
    border-bottom: purple 2px solid;
    opacity: .5;
  }
`;


const Container = styled.div`
  width: 100vw;
  
  a {
    text-decoration: none;
    margin: 0px;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 2.4rem;
`;

const StyledHeader = styled.header`
  height: 90px;
  display: flex;
  flex-direction: row;
  margin: 0px;
`;

const HeaderLinks = styled.div`

`;

const StyledDiv = styled.div`
width: 70vw;
height: 40px;
display: flex;
justify-content: flex-end;



`


export default Header;
