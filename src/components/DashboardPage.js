import React from 'react';
import { row, column } from 'reactstrap';
import ItemList from './ItemList';
import ItemListFilters from './ItemListFilters';

const DashboardPage = () => (
  <div className="row">
    <div className="col-sm-12">
      <ItemListFilters />
      <ItemList />
    </div>
  </div>
);

export default DashboardPage;
