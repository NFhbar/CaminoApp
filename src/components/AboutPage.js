import React from 'react';
import { NavLink } from 'react-router-dom';
import { row, column } from 'reactstrap';

const AboutPage = () => (
  <div className="row card-body">
    <div className="col-sm-12">
      <div className="jumbotron">
        <h1 className="display-4">React-Redux App</h1>
        <p className="lead">This App is built by
          <a href="https://www.linkedin.com/in/nicolas-frega/"> Nicolas Frega. </a>
         </p>
        <hr className="my-4"/>
        <p>The App is built with React, Redux, Bootstrap, Firebase, and Chartjs. It is deployed using Heroku. It mimics some
        of the behavior of a store App in which the admin can add items to sell at a
        given price. Added items are randomly generated sold amounts for 4 months for displaying purposes. Items can be sorted by price or amount sold.
        The items are then rendered dynamically to the page.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="https://github.com/NFhbar/CaminoApp" role="button">View github</a>
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
