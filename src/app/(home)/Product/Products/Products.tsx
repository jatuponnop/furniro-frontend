import React from "react";
import ProductItem, { ProductItemProps } from "../ProductItem/ProductItem";
import "./Products.scss";

interface Props {
  products: Array<ProductItemProps>;
}

function Products({ products }: Props) {
  return (
    <div className="products">
      {products.map((product: ProductItemProps) => (
        <ProductItem key={product.id + ""} {...product} />
      ))}
    </div>
  );
}

export default Products;
