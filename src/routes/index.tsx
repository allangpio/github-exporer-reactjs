import React from 'react';
import { Switch, Route } from 'react-router';

import Dashboard from '../pages/Dashboard.tsx';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
