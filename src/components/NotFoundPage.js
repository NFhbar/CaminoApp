import React from 'react';
import { Link } from 'react-router-dom';
import { row, column } from 'reactstrap';

const NotFoundPage = () => (
  <div className="row">
    <div className="col-sm-12">
      404 - <Link to="/">Go Home</Link>
    </div>
  </div>
);

export default NotFoundPage;
