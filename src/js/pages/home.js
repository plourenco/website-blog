import React from 'react';
import Rocket from 'app/components/rocket';
import Typist from 'react-typist';

require('react-typist/dist/Typist.css');
require('./home.scss');

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rocketActive: ''
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ rocketActive: 'active' });
        }, 500);
    }

    typingDone = () => {
        this.setState({ rocketActive: 'end' });
    };

    render () {
        return (
            <div className='layout'>
                <section id='home' className='fullscreen'>
                    <div className='row'>
                        <div className='col-12 col-md-8 cover'>
                            <Typist cursor={{ show: false }} onTypingDone={ this.typingDone }>
                                <span className='section-title'>Hi, I'm Pedro, a Rocket Engineer</span>
                                <Typist.Backspace count={17} delay={1000}/>
                                <span className='section-title'>I mean...</span>
                                <Typist.Backspace count={9} delay={500}/>
                                <span className='section-title'>a Software Engineer!</span>
                            </Typist>
                        </div>
                        <div className='col-12 col-md-4'>
                            <Rocket active={ this.state.rocketActive }/>
                        </div>
                    </div>
                </section>
                <section>
                    <div id='about' className='section-heading'>
                        <h1 className='section-title'>About me</h1>
                    </div>
                    <div className='section-text'>
                        <div className='row'>
                            <div className='col-12 offset-md-2 col-md-8'>
                                <h5 style={{ lineHeight: '38px' }}>I'm a 23 years old engineer that recently finished
                                his master degree in Software Engineering. I'm passionate about
                                new technologies and challenges. Apart from the tech world,
                                    my interests vary around music and surfing.</h5>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='projects' className='sepia'>
                    <div className='section-heading'>
                        <h1 className='section-title'>A few things I've done</h1>
                    </div>
                    <div className='section-text'>
                        <div className='row mb-5'>
                            <div className='col-12 offset-md-2 col-md-4'>
                                <div className="card h-100">
                                    <img className="card-img-top"
                                         style={{ backgroundImage: 'url(\'assets/img/cloudcity.png\')' }}/>
                                    <div className="card-body">
                                        <div className="card-tags">
                                            <span>Master Thesis</span>
                                        </div>
                                        <h4 className="card-title">CloudCity</h4>
                                        <p className="card-text">To avoid the substantial amount of
                                            complexity in building and managing
                                            reliable infrastructures, I proposed an
                                            immersive 3D integrated environment
                                            for the live management of cloud
                                            infrastructures (in real-time), through a
                                            city model-based metaphor (mainly AWS based).</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className="card h-100">
                                    <img className="card-img-top"
                                         style={{ backgroundImage: 'url(\'assets/img/helpwin.png\')' }}/>
                                    <div className="card-body">
                                        <div className="card-tags">
                                            <span>Curricular Scope</span>
                                        </div>
                                        <h4 className="card-title">Helpwin</h4>
                                        <p className="card-text">Helpwin main focus is to ease the access
                                            and offering of volunteering, by centralizing and speeding up
                                            the cataloging and selection process. Besides energizing volunteering,
                                            it is also possible to optimize volunteer profiling and task
                                            matching based on volunteer skills via an innovative web platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 offset-sm-4 col-sm-4'>
                                <div className="card h-100">
                                    <img className="card-img-top"
                                         style={{ backgroundImage: 'url(\'assets/img/stockprediction.png\')' }}/>
                                    <div className="card-body">
                                        <div className="card-tags">
                                            <span>Predictive Data Analysis</span>
                                        </div>
                                        <h4 className="card-title">Stock Prediction</h4>
                                        <p className="card-text">Developed a predictive data analysis
                                            (DA) task that intends to predict
                                            the amount of products required to
                                            prevent under or over stocking, with
                                            non-simulated data, in partnership
                                            with a retail company. Using regression
                                            methods such as Lasso, Ridge, Linear
                                            and Random Forest.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='education'>
                    <div className='section-heading'>
                        <h1 className='section-title'>Education</h1>
                    </div>
                    <div className='section-text'>
                        <div className='education'>
                            <div className='row mb-5'>
                                <div className='col-2 offset-2 d-none d-lg-block'>
                                    <img className='rounded' src='assets/img/feup.png'/>
                                </div>
                                <div className='col-12 col-md-7'>
                                    <div className='card-block'>
                                        <h4 className='card-title'>MSc in Software Engineering</h4>
                                        <div className="card-tags">
                                            <span>Faculty of Engineering, University of Porto</span>
                                        </div>
                                        <p className="card-text">MSc in Software Engineering at the
                                            Faculty of Engineering (top 1%).
                                            Main skills obtained were Data Analysis,
                                            Software Architecture, Software
                                            Development, Software Testing, Cloud
                                            Computing (Thesis).</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-2 offset-2 d-none d-lg-block'>
                                    <img className='rounded' src='assets/img/fcup.png'/>
                                </div>
                                <div className='col-12 col-md-7'>
                                    <div className='card-block'>
                                        <h4 className='card-title'>BSc in System Networking and
                                            Engineering</h4>
                                        <div className="card-tags">
                                            <span>Faculty of Science, University of Porto</span>
                                        </div>
                                        <p className="card-text">BSc in System Networking and
                                            Engineering at the Faculty of Science.
                                            Main skills obtained were Algorithms
                                            and Data structures, OOP, System
                                            networking, Compilers, Artificial
                                            Intelligence and Computational Logic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='contact' className='sepia'>
                    <div className='section-heading'>
                        <h1 className='section-title'>Contact</h1>
                    </div>
                    <div className='section-text'>
                        <div className='row mb-5'>
                            <div className='col-12'>
                                <h5>Stay in touch with me using one of the social medias below!</h5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
