import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import {toggeleCardHidden} from '../../redux/cart/cart.actions'


const CartIcon = ({toggeleCardHidden}) => (
    <div className='cart-icon' onClick={toggeleCardHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggeleCardHidden: () => dispatch(toggeleCardHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);

