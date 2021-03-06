import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.coponent";
import { createStructuredSelector} from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => {
  return (
    <nav className="header #00796b teal darken-2">
      <div className="nav-wrapper text-darken-2">
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
          <li>
            <CartIcon />
          </li>
        </ul>

        {hidden ? null : <CartDropdown />}
      </div>
    </nav>
  );
};



// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// });

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartHidden
});



export default connect(mapStateToProps)(Header);
