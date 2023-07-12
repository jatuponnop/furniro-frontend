import React from "react";
import "./ProductItem.scss";

export type ProductItemProps = {
  id: string;
  title: string;
  detail: string;
  price: number;
  discount?: number;
  tag?: string;
};

function ProductItem({
  id,
  title,
  detail,
  price,
  discount,
  tag,
}: ProductItemProps) {
  return (
    <div className="product-item">
      <img
        className="product-img"
        src={"images/products/" + id + ".png"}
        alt=""
      />
      <div className="title">Syltherine</div>
      <div className="detail">Stylish cafe chair</div>
      <div className="price">Rp 2.500.000</div>
      <div className="full-price">Rp 3.500.000</div>
      <div className="discount">-30%</div>
    </div>
  );
}

export default ProductItem;
