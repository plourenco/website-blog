import React from 'react';
import { Link } from 'react-router'
import Footer from './footer';
import Header from './header';

require('./layout.scss');

export default class LayoutBlank extends React.Component {

    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <Header/>
                { this.props.children }
                <Footer/>
            </div>
        );
    }
}
