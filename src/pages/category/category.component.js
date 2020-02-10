import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./category.styles.scss";
import { selsctCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="container">
      <div className="collection-page row">
        <h4 className="title">{title}</h4>
        <div className="items">
          {items.map(item => (
            <CollectionItem key={items.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selsctCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
