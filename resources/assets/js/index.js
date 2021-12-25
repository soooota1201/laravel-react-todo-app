import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
        <h2>About</h2>
        </div>
    );
}

const Topic = () => {
    return (
        <div>
        <h2>Topic</h2>
        </div>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topic</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/" component={ App } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/topics" component={ Topic } />
                </Switch>
            </div>
        </BrowserRouter>
        , document.getElementById('root'));
}
