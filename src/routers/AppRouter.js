import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { container } from 'reactstrap';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import AddItemPage from '../components/AddItemPage';
import EditItemPage from '../components/EditItemPage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container card text-center">
        <Header />
        <Switch>
          <Route path="/" component={DashboardPage} exact={true}/>
          <Route path="/create" component={AddItemPage} />
          <Route path="/edit/:id" component={EditItemPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
