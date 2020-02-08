import CartActionTypes from './cart.types';

export const toggeleCardHidden = () => ({
    type : CartActionTypes.TOOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type : CartActionTypes.ADD_ITEM,
    payload:item
})