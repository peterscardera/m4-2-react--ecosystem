import React from "react";
import styled from "styled-components";

const SpecificSeller = ({ sellerData }) => {
  console.log(sellerData);
  return (
    <StyledContainer>
      <StyledDiv> {sellerData.id} </StyledDiv>
      <StyledImg src={sellerData.avatarSrc} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
display: flex; 
flex-direction: column;
align-items:start;
`

const StyledDiv = styled.div`
font-weight: bold;
text-transform: uppercase;

`

const StyledImg = styled.img`
border-radius: 30%;
height: 400px;
`
export default SpecificSeller;
