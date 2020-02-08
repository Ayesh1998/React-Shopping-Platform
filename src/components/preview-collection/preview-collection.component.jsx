import React from "react";
import "./preview-collection.styles.scss";
import "materialize-css/dist/css/materialize.min.css";
import CollectionItem from '../../components/collection-item/collection-item.component'

const PreviewCollection = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview container">
      <h4 className="">{title.toUpperCase()}</h4>
      <div className="preview row">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item = {item}/>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
