import React from "react";
import "materialize-css/dist/css/materialize.min.css";

import MenuItem from "../../components/menu-item/menu-item.component";

class MenuList extends React.Component {

    constructor(){
        super();

        this.state={
            section:[
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    size: 'm4',
                    linkUrl: 'shop/hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    size: 'm4',
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    size: 'm4',
                    linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'm6',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'm6',
                    id: 5,
                    linkUrl: 'shop/mens'
                  }
            ]

        }
    }


    render(){

        return (
            <div className="row directory-menu">
              {
                  this.state.section.map(({id, ...otherProps} ) => (
                   //   <MenuItem titles={title} key={id} image={imageUrl} size={size} linkUrl={linkUrl}/>
                      <MenuItem key={id}  {...otherProps}/>
                  ))
              }
            </div>
         ) ;
    }

 
}

export default MenuList
