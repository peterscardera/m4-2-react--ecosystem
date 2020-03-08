import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EachUnit from "./EachUnit";



const ListingGrid = ({ itemList: itemList }) => {
  return (
    <FruitContainer>
      {itemList.map(eachFruit => {
        return <EachUnit item={eachFruit}></EachUnit>;
      })}
    </FruitContainer>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ListingGrid;

const FruitContainer = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr ;
margin: 10px 40px 0px;
grid-gap: 20px;
justify-items: center;
`