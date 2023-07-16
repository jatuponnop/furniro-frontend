import React from "react";
import "./Product.scss";
import Products from "./Products/Products";
import { ProductItemProps } from "./ProductItem/ProductItem";

type Props = {};

function Product({}: Props) {
  const products: Array<ProductItemProps> = [
    {
      id: "1",
      title: "Syltherine",
      detail: "Stylish cafe chair",
      price: 3500,
      discount: 30,
    },
    {
      id: "2",
      title: "Syltherine",
      detail: "Stylish cafe chair",
      price: 3500,
    },
    {
      id: "3",
      title: "Syltherine",
      detail: "Stylish cafe chair",
      price: 3500,
      discount: 30,
    },
    {
      id: "4",
      title: "Syltherine",
      detail: "Stylish cafe chair",
      price: 3500,
      tag: "new",
    },
    {
      id: "5",
      title: "Syltherine",
      detail: "Stylish cafe chair",
      price: 3500,
    },
    {
      id: "6",
      title: "Syltherine",
      detail: "Stylish cafe chair",
      price: 3500,
      discount: 30,
      tag: "new",
    },
    {
      id: "7",
      title: "Syltherine",
      detail: "Stylish cafe chair",
      price: 3500,
      discount: 50,
    },
    {
      id: "8",
      title: "Syltherine",
      detail: "Stylish cafe chair",
      price: 3500,
      discount: 30,
      tag: "new",
    },
  ];
  return (
    <div className="product container">
      <div className="title">Our Products</div>
      <Products products={products} />
      <button className="btn-show-more">Show More</button>
    </div>
  );
}

export default Product;
