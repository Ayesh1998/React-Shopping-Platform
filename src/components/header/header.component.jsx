import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  return (
    <nav className="header">
      <div className="nav-wrapper blue-text text-darken-2">
        <div className="brand-logo-container">
          <Link to="/" class="brand-logo">
            <Logo />
          </Link>
        </div>
        <ul id="nav-mobile " className="right hide-on-med-and-down">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {currentUser ? (
            <li>
              <div className="signoutHeader" onClick={() => auth.signOut()}>
                SignOut
              </div>
            </li>
          ) : (
            <li>
              <Link to="/signin-signup">SignIn</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);