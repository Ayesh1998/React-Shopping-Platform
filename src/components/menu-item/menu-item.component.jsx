import React from "react";
import "materialize-css/dist/css/materialize.min.css";

import "./menu-item.style.scss";

const MenuItem = ({ titles, image , size}) => {
  return (
    <div className={ `${size} col  menu-item card`}>
      {/* <img className='card-image' src= {image} /> */}
      <div
        className="card-content"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='card-details'>
          <h1
            className="card-title"
            style={{ fontSize: "50px", fontStyle: "bold" }}
          >
            {titles}
          </h1>
          <span>Shop Now</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
