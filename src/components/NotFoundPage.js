import React from 'react';
import { Link } from 'react-router-dom';
import { row, column } from 'reactstrap';

const NotFoundPage = () => (
  <div className="row card-body">
    <div className="col-sm-12">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">404 - Oops!</h4>
        <p>Looks like you took a wrong turn, no worries.</p>
        <p className="mb-0">  <Link to="/">Go Home</Link></p>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
