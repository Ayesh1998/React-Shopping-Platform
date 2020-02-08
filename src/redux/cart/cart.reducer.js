import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

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

   

    default:
      return state;
  }
};

export default cartReducer;
