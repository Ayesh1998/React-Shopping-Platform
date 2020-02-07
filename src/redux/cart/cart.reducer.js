import CartActionTypes from './cart.types';

const Init_State ={
    hidden: true
}

const cartReducer = (state=Init_State, action) => {
    switch (action.type) {
        case CartActionTypes.TOOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            
            break;
    
        default:
            return state;
    }
}

export default cartReducer;