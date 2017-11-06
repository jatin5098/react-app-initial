import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, HashRouter, browserHistory } from 'react-router-dom';

import store from './store';

import AppComponent from './components/AppComponent.jsx';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={AppComponent} />
            </div>
        </HashRouter>       
    </Provider>, 
    document.getElementById('app')
);