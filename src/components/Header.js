import React from 'react';
import { NavLink } from 'react-router-dom';
import { row, column } from 'reactstrap';

const Header = () => (
  <div className="row card-header">
    <div className="col-sm-12">
        <h1 className="card-title" id="header-title">Camino Financial React App</h1>
        <div className="row">
          <div className="col-md-4">
            <NavLink to="/" className="btn btn-primary" activeClassName="is-active" exact={true}>Dashboard</NavLink>
          </div>
          <div className="col-md-4">
            <NavLink to="/create" className="btn btn-primary" activeClassName="is-active">Add Item</NavLink>
          </div>
          <div className="col-md-4">
            <NavLink to="/about" className="btn btn-primary" activeClassName="is-active">About</NavLink>
          </div>
        </div>
    </div>
  </div>
);

export default Header;
