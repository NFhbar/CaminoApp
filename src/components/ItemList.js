import React from 'react';
import { connect } from 'react-redux';
import ItemListItem from './ItemListItem';
import selectItems from '../selectors/items';

export const ItemList = (props) => (
  <li className="list-group-item">
    {
      props.items.length === 0 ? (
        <div className="alert alert-primary" role="alert">Add some items to get started!</div>
      ) : (
        props.items.map((item) => {
          return <ItemListItem key={item.id} {...item}/>
        })
      )
    }
   </li>
);

const mapStateToProps = (state) => {
  return {
    items: selectItems(state.items, state.filters)
  };
};

export default connect(mapStateToProps)(ItemList);
