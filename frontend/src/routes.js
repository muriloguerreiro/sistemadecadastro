import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard/index';
import Register from './pages/Register/index';
import Update from './pages/Register/update';
import Listing from './pages/Listing/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/cadastro" exact component={Register} />
                <Route path="/cadastro/:id" component={Update} />
                <Route path="/listagem" component={Listing} />
            </Switch>
        </BrowserRouter>
    )
}