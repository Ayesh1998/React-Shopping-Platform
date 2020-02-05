import React from 'react';

import './collection-item.styles.scss';
import "materialize-css/dist/css/materialize.min.css";

const CollectionItem = ({id, name, price, imageUrl}) => {
    return(
        <div className='collection-item col m3 card medium' key={id}>
            <div className='image card-image' >
                <img src={ `${imageUrl}` }/>
            </div>
                <div className='collection-footer card-content'>
                    <span className='name black-text text-lighten-5'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
            

        </div>
    )
}

export default CollectionItem;
