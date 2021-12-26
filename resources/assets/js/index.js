import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import TaskEdit from './components/TaskEdit';

if (document.getElementById('root')) {
    ReactDOM.render(
        <HashRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route exact path="/:id/edit" component={TaskEdit} >

                    </Route>
                </Switch>
            </div>
        </HashRouter>
        , document.getElementById('root'));
}
