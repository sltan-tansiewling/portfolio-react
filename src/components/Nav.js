import React from 'react';

class Nav extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                    <a className="navbar-brand col-6" href="#">
                        <img className="col col-2" src="img/logo.png" alt="Tan Siew Ling - Up Your Software Quality" title="Tan Siew Ling - Up Your Software Quality" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;