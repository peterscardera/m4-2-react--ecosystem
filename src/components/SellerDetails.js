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
    <div>
      <div> Welcome to {specificSeller.storeName}</div>
      <button onClick= {backFunction}> Back  </button>
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
      
    </div>
  );
};

const StyledImg = styled.img`
  width: 100px;
`;
export default SellerDetails;
