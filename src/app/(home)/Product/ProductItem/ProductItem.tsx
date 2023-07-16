import React from "react";
import "./ProductItem.scss";
import { formatDouble } from "@/app/_utils/utils";

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
  const realPrice =
    price -
    (price / 100) * (discount == undefined || discount == 0 ? 0 : discount);

  return (
    <div className="product-item">
      <img
        className="product-img"
        src={"images/products/" + id + ".png"}
        alt=""
      />
      <div className="product-wrapper">
        <div className="product-title">{title}</div>
        <div className="detail">{detail}</div>
        <div className="price-wrapper">
          <span className="price">Rp {formatDouble(realPrice)}</span>
          {discount != undefined ? (
            <span className="full-price">{formatDouble(price)}</span>
          ) : (
            ""
          )}
        </div>
        {discount != undefined && !(discount <= 0) && tag == undefined ? (
          <div className="tag-wrapper discount-tag">
            <div className="tag">
              <span className="tag-text">-{discount}%</span>
            </div>
          </div>
        ) : (
          ""
        )}
        {tag != undefined && tag == "new" ? (
          <div className="tag-wrapper new-tag">
            <div className="tag">
              <span className="tag-text">New</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProductItem;
