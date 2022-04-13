import React from 'react';

import {
    BrowserRouter as Router,
    Route, Redirect, Switch
} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Competitions from './components/Pages/Competitions';

const history = createBrowserHistory();

const routes = (
    <Router history={history}>
        <Switch>
            <Route exact path="/">
                <Redirect to="/competitions" />
            </Route>
            <Route exact path="/competitions" component={Competitions} />
        </Switch>
    </Router>
)

export default routes
