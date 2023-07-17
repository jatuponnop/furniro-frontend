import React from "react";
import "./Inspiration.scss";

type Props = {};

function Inspiration({}: Props) {
  return (
    <div className="inspiration">
      <div className="container" style={{ textAlign: "left" }}>
        <div className="inspiration-left">
          <div className="inspiration-title">
            50+ Beautiful rooms inspiration
          </div>
          <div className="inspiration-subtitle">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </div>
          <button className="inspiration-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
