import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from '../view/Main';

const Routers = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </Router>
);

export default Routers;
