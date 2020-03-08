import React from "react";
import styled from "styled-components";
import SpecificSeller from "./specificSeller";
import { Link } from "react-router-dom";

const SellerList = ({ list }) => {
  let sellerPage = Object.values(list);
  console.log(sellerPage);

  return (
    <>
      {sellerPage.map(eachSeller => {
        return (
          <Link to={`/sellers/${eachSeller.id}`}>
            <SpecificSeller sellerData={eachSeller}></SpecificSeller>
          </Link>
        );
      })}
    </>
  );
};

export default SellerList;
