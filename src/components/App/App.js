import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import './sass/App.scss';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);