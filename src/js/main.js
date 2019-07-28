import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';
import Layout from 'app/components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = document.getElementById('app');
const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout/>
        </ConnectedRouter>
    </Provider>,
    app
);
