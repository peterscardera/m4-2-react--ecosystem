import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { items } from "../data";

const Home = props => {
  console.log(props);
  return (
    <>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:{" "}
        <ListingGrid itemList={Object.values(items)}> ></ListingGrid>
      </p>
    </>
  );
};

export default Home;
