import React from "react";
import "./Product.scss";
import Products from "./Products/Products";

type Props = {};

function Product({}: Props) {
  return (
    <div className="product container">
      <div className="title">Our Products</div>
      <Products products={[]} />
      <button className="btn-show-more">Show More</button>
    </div>
  );
}

export default Product;
