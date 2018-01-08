import React from 'react';
import {Link} from 'react-router-dom';
import numeral from 'numeral';

const ItemListItem = ({id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{numeral(amount/100).format('$0,0.00')} - {createdAt}</p>
  </div>
);

export default ItemListItem;
