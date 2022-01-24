import React from "react";
import { useNavigate } from "react-router-dom";
import ProductHeader from "./productHeader";
import ProductMain from "./productMain";

const Product = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProductHeader navigate={navigate} />
      <ProductMain />
    </>
  );
};

export default Product;
