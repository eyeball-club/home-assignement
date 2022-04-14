import React from 'react';

import {
  BrowserRouter as Router,
  Route, Redirect, Switch
} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Competitions from './components/Pages/Competitions';
import MatchesList from './components/Pages/MatchesList';
import NotFound from './components/Pages/NotFound';

const history = createBrowserHistory();

const routes = (
  <Router history={history}>
     <Switch>
    {/* <Route exact path="/">
      <Redirect to="/competitions" />
    </Route> */}
    <Route exact path="/" component={Competitions} />
    <Route exact path="/matchlist/:id" component={MatchesList} />
    <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
  )

export default routes
