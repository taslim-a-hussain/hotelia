import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import './sass/App.scss';

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </HashRouter>
);