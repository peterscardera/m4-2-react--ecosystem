import React from "react";
import styled from "styled-components";

const SpecificSeller = ({ sellerData }) => {
  
  return (
    <StyledContainer>
      
      <StyledImg src={sellerData.avatarSrc} />
      <StyledDiv> {sellerData.id} </StyledDiv>
    
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
display: flex; 
flex-direction: row;
justify-content: center;
`

const StyledDiv = styled.div`
font-weight: bold;
text-transform: uppercase;

`

const StyledImg = styled.img`
border-radius: 30%;
height: 200px;

`
export default SpecificSeller;
