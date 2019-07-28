import React from 'react';
import Footer from './footer';
import Header from './header';
import Home from 'app/pages/home';
import { Switch, Route } from 'react-router-dom';
import './layout.scss';

export default class LayoutBlank extends React.Component {

    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
                <Footer/>
            </div>
        );
    }
}
