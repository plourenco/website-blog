import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from 'app/components/layout';
import Home from 'app/pages/Home';

const app = document.getElementById('app');

ReactDOM.render(

    <Router history={ hashHistory }>
        <Route path='/' component={ Layout }>
            <IndexRoute component={ Home }/>
        </Route>
    </Router>,
    app
);
