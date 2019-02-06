import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <div className='container'>
                    <p className='signature'>Pedro Lourenco</p>
                    <div id="navigation" className="d-none d-lg-block">
                        <ul className="navigation-menu">
                            <li>
                                <Link to="home">Home</Link>
                            </li>
                            <li>
                                <Link to="about" smooth={true}>About</Link>
                            </li>
                            <li>
                                <Link to="projects" smooth={true}>Projects</Link>
                            </li>
                            <li>
                                <Link to="education" smooth={true}>Education</Link>
                            </li>
                            <li>
                                <Link to="contact" smooth={true}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}
