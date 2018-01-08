import React from 'react';
import { NavLink } from 'react-router-dom';
import { row, column } from 'reactstrap';

const Header = () => (
  <div className="row">
    <div className="col-sm-12">
      <h1>CaminoApp</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Item</NavLink>
      <NavLink to="/about" activeClassName="is-active">About</NavLink>
    </div>
  </div>
);

export default Header;
