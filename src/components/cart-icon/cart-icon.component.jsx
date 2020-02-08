import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import {toggeleCardHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';


const CartIcon = ({toggeleCardHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggeleCardHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggeleCardHidden: () => dispatch(toggeleCardHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

