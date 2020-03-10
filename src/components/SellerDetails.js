import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { sellers, items } from "../data";

const SellerDetails = () => {
  const { sellerId } = useParams();
  const specificSeller = sellers[sellerId];

  let history = useHistory()
  const backFunction = () => {
    history.goBack();
  }

  let inventory = Object.values(items);

  return (
    <Container>
       {/* <button onClick= {backFunction}> Back  </button> */}
      <div> Welcome to {specificSeller.storeName}</div>
     
      <div> {specificSeller.description}</div>
      <div>
        {inventory.map(item => {
          if (item.sellerId == sellerId) {
            return (
              <Link to={`/items/${item.id}`}>
                <StyledImg src={item.imageSrc} />
              </Link>
            );
          }
        })}
      </div>
      
    </Container>
  );
};

const StyledImg = styled.img`
  width: 100px;
  opacity: .8;
  border-radius: 25%;
  padding: 20px;

`;


const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;

`;
export default SellerDetails;
