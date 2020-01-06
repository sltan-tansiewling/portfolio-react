import React from 'react';

class Nav extends React.Component {
    render() {

        const containerStyle = {
            "position": "absolute",
            "width": "100%"
        };

        return(
            <div style={containerStyle}>
                <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top">
                    <a className="navbar-brand" href="/">
                        <img src="img/logo.png" width="100px" height="100px" className="d-inline-block align-center mr-5" alt="Tan Siew Ling - Up Your Software Quality" title="Tan Siew Ling - Up Your Software Quality" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="#about">About</a>
                            <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
                            <a className="nav-item nav-link" href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;