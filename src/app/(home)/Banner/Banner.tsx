import React from "react";
import "./Banner.scss";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="banner">
      <div className="card">
        <div className="card-wrapper">
          <div className="topic">New Arrival</div>
          <div className="title">Discover Our New Collection</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          <button className="button">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
