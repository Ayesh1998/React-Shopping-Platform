import React from "react";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import  PreviewCollection  from "../preview-collection/preview-collection.component";

import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);