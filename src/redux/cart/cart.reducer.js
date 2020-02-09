import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const Init_State = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = Init_State, action) => {
  switch (action.type) {

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

      
    case CartActionTypes.TOOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

      case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

      case CartActionTypes.ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        };

      case CartActionTypes.REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        };

   

    default:
      return state;
  }
};

export default cartReducer;
