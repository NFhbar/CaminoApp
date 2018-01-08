import React from 'react';
import { row, column } from 'reactstrap';
import ItemList from './ItemList';
import ItemPlot from './ItemPlot';
import ItemListFilters from './ItemListFilters';

const DashboardPage = () => (
  <div className="row card-body">
    <div className="col-sm-12">
      <ItemListFilters />
      <ul className="list-group">
        <li className="list-group-item disabled">
          <div className="row">
            <div className="col-sm-4">
              Item
            </div>
            <div className="col-sm-4">
              Price
            </div>
            <div className="col-sm-4">
              Items sold
            </div>
          </div>
        </li>
        <ItemList />
      </ul>
      <ItemPlot />
    </div>
  </div>
);

export default DashboardPage;
