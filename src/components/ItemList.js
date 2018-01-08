import React from 'react';
import { connect } from 'react-redux';
import ItemListItem from './ItemListItem';
import selectItems from '../selectors/items';

export const ItemList = (props) => (
  <div>
    {
      props.items.length === 0 ? (
        <p>No Items</p>
      ) : (
        props.items.map((item) => {
          return <ItemListItem key={item.id} {...item}/>
        })
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    items: selectItems(state.items, state.filters)
  };
};

export default connect(mapStateToProps)(ItemList);
