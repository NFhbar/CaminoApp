import React from 'react';
import {Link} from 'react-router-dom';
import numeral from 'numeral';

const ItemListItem = ({id, description, amount, sales }) => (
  <div className="row">
    <div className="col-sm-4">
      <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    </div>
    <div className="col-sm-4">
      {numeral(amount/100).format('$0,0.00')}
    </div>
    <div className="col-sm-4">
      {sales}
    </div>
  </div>
);

export default ItemListItem;
