import React from 'react';

export default class Footer extends React.Component {

    render () {
        return (
            <footer className="footer">
                <div className="container text-center">
                    <a target="_blank" href="https://www.linkedin.com/in/pedrogilourenco/">
                        <i className="fa fa-linkedin"/>
                    </a>
                    <a target="_blank" href="https://github.com/pedroo21">
                        <i className="fa fa-github"/>
                    </a>
                    <a target="_blank" href="https://www.quora.com/profile/Pedro-Louren%C3%A7o-25">
                        <i className="fa fa-quora"/>
                    </a>
                </div>
            </footer>
        );
    }
}
