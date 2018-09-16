import React from 'react';
import {IndexLink, Link} from 'react-router';

require('./home.scss');

export default class Home extends React.Component {

    render () {
        return (
            <div className='layout'>
                <p className='signature'>Hello!</p>
                <p>My name is...</p>
                <p className='signature'>Pedro Lourenço .</p>
                <p>I'm crafting a new website. Something cool will be here soon!</p>
            </div>
        );
    }
}
