import React from "react";
import { sellers, items } from "../data";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";



const ItemDetails = () => {
  let { itemId } = useParams();
  let history = useHistory()

  const backFunction = () => {
    history.goBack();
  }

  let viewedFruit = items[itemId];
  let currentSeller = sellers[viewedFruit.sellerId];
  //console.log(currentSeller)
  //let currentSeller = viewedFruit[sellerId]

  return (
    <Container>
      <StyledImg src={viewedFruit.imageSrc} />
      <StyledText>
          <div> 
        <StyledType> {viewedFruit.name}</StyledType>
        <StyleLatin>{viewedFruit.latinName}</StyleLatin>
        </div>
        <div>{viewedFruit.description}</div>
        <div>Product of {viewedFruit.countryOfOrigin}</div>
        <StyledButton>{viewedFruit.price}Buy now</StyledButton>
        <div>
            <SellerImg src={currentSeller.avatarSrc}/>
          Sold by: {currentSeller.storeName}, by {currentSeller.id}
        </div>
        <button onClick= {backFunction}> Back  </button>
      </StyledText>

    </Container>
  );
};

export default ItemDetails;

const StyledButton = styled.button`
height:50px;
border-radius: 10px;
cursor: pointer;
outline:none;
background: papayawhip;
&:hover {
    background: palevioletred;
}
`

const StyledText = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
`


const StyleLatin = styled.div`
font-style: italic;
color: grey;
`

const StyledType = styled.div`
font-size: 1.2rem;
font-weight: bold;
`

const Container = styled.div`
  margin: 0% 10%;  
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 1fr;
  
`;
const SellerImg =styled.img`
width: 40px;
border-radius: 50%;

`

const StyledImg = styled.img`
  width: 60%;
  border-radius: 9px;
  justify-self: center;
`;
