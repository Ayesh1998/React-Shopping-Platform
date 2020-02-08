import React from "react";
import { connect } from 'react-redux';
import "./cart-dropdown.styles.scss";
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown" >
    <div className="cart-items">
      {
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      }
        
        
    </div>
    <button className='waves-effect waves-light btn'>Go to checkout</button>
  </div>
);

// const mapStateToProps = (state) => {

// }
// or

const mapStateToProps = ({ cart: {cartItems}}) => ({
  cartItems:cartItems
})

export default connect(mapStateToProps)(CartDropdown);
