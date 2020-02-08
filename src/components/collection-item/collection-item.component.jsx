import React from 'react';
import { connect } from 'react-redux';
import { addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';
import "materialize-css/dist/css/materialize.min.css";

const CollectionItem = ({id, item , addItem }) => {

    const { name, price, imageUrl} = item;

    return(
        <div className='collection-item col m3 card medium' key={id}>
            <div className='image card-image' >
                <img src={ `${imageUrl}` }/>
            </div>
                <div className='collection-footer card-content'>
                    <span className='name black-text text-lighten-5'>{name}</span>
                    <span className='price'>${price}</span>
                    <button className='waves-effect waves-light btn addToCartBtn' onClick={ () => addItem(item) }>Add to cart <i class="material-icons right">local_grocery_store</i></button>
                </div>
            

        </div>
    )
}

const mapDispatchToProps =  dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
