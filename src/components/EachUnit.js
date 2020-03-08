import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FruitName = styled.div`
  text-transform: uppercase;
  font-size: 1.3rem;
`;

const EachUnit = ({ item: item }) => {
  return (
    <StyledContainer>
      <Link to={`/items/${item.id}`}>
        <Fruits>
          <FruitImg src={item.imageSrc} />
          <FruitName>{item.name}</FruitName>
          <span>{item.latinName}</span>
        </Fruits>
      </Link>
    </StyledContainer>
  );
};

export default EachUnit;


const StyledContainer = styled.div`
  a {
    text-decoration: none;
  }
`;

const Fruits = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 2px 2px 16px -1px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FruitImg = styled.img`
  width: 70%;
  border-radius: 8px;

  &:hover {
    transform: scale(1.2);
    transition: all 1sec;
  }
`;
