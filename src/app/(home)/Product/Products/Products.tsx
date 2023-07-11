import React from "react";
import ProductItem, { ProductItemProps } from "../ProductItem/ProductItem";

interface Props {
  products: ProductItemProps;
}

function Products({ products }: Props) {
  return <div className="products">Products</div>;
}

export default Products;
