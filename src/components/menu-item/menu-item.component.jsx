import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import {withRouter} from 'react-router-dom';
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl , size, history, linkUrl, match}) => {
  return (
    <div className={ `${size} col  menu-item card`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      {/* <img className='card-image' src= {image} /> */}
      <div
        className="card-content"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className='card-details'>
          <h1
            className="card-title"
            style={{ fontSize: "50px", fontStyle: "bold" }}
          >
            {title}
          </h1>
          <span>Shop Now</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem) ;
