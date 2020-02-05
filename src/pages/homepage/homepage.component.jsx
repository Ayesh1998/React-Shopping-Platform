import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import MenuList from '../../components/menu-list/menu-list.component'

import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="container homepage">
      <MenuList/>
    </div>
  );
};

export default Homepage;
