import React from "react";
import "./Category.scss";

type Props = {};

function Category({}: Props) {
  return (
    <div className="container text-center">
      <div className="category">
        <div className="title">Browse The Range</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="category-item-wrapper">
          <div className="category-item">
            <img
              className="category-img"
              src="images/category/dining.png"
              alt="Dining"
            />
            <div className="category-name">Dining</div>
          </div>
          <div className="category-item">
            <img
              className="category-img"
              src="images/category/living.png"
              alt="Dining"
            />
            <div className="category-name">Living</div>
          </div>
          <div className="category-item">
            <img
              className="category-img"
              src="images/category/bedroom.png"
              alt="Dining"
            />
            <div className="category-name">Bedroom</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
