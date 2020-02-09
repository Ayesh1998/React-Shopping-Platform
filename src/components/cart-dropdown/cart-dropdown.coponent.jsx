import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import { toggeleCardHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history , dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="red-text empty-cart">Cart is Empty</span>
      )}
    </div>
    <button
      className="waves-effect waves-light btn"
      onClick={() => {
        history.push("/checkout");
        dispatch(toggeleCardHidden());
      }}
    >
      Go to checkout
    </button>
  </div>
);

// const mapStateToProps = (state) => {

// }
// or

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
