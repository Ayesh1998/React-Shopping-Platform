import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';  

import MenuItem from "../../components/menu-item/menu-item.component";

const MenuList = ({section}) => {
        return (
            <div className="row directory-menu">
              {
                  section.map(({id, ...otherProps} ) => (
                   //   <MenuItem titles={title} key={id} image={imageUrl} size={size} linkUrl={linkUrl}/>
                      <MenuItem key={id}  {...otherProps}/>
                  ))
              }
            </div>
         ) ;
}

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySections
})

export default connect(mapStateToProps)(MenuList);
