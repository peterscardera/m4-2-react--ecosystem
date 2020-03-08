import React from "react";
import styled from "styled-components";
import SpecificSeller from "./specificSeller"
const SellerList = props => {
let list = props.list
console.log(list)
  return (
<>
<SpecificSeller sellerPage = {Object.values(list)}> </SpecificSeller>

</>


  )

};

export default SellerList;
