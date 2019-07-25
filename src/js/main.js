import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import history from './utils/history';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from 'app/components/layout';
import Home from 'app/pages/Home';

const app = document.getElementById('app');
const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    app
);
