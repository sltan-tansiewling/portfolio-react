import React from 'react'

class Portfolio extends React.Component {
    render() {

        return(
            <div>
                <article id="portfolio">
                    <div className="row mt-3">
                        {/* SECTION NAME */}
                        <div className="col col-4 pl-5">
                            <div className="section-name-bg">
                                <h3>PORTFOLIO</h3>
                            </div>
                        </div>
                        {/* SECTION CONTENT */}
                        <div className="col-6">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="img/save-the-earth-snapshot.png" className="card-img" alt="Save-the-Earth" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Save-the-Earth</h5>
                                            <p className="card-text">An educational game to educate the public on the concepts of recycling while having fun.</p>
                                            <p className="card-text"><small className="text-muted">Technologies Used: HTML, CSS, JavaScript</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="img/hr-system-snapshot.png" className="card-img py-5" alt="HR System" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">HR System</h5>
                                            <p className="card-text">A HR system to allow employees to apply and keep track of their leave applications.</p>
                                            <p className="card-text"><small className="text-muted">Technologies Used: Node JS, Express JS, PostgreSQL</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="img/minimum-quantity-snapshot.png" className="card-img py-5" alt="Minimum Quantity" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Minimum Quantity</h5>
                                            <p className="card-text">A social network platform to allow users to consolidate their food orders to get group discount when minimum quantity or spending specified by the restaurant is met.</p>
                                            <p className="card-text"><small className="text-muted">Technologies Used: Ruby on Rails, PostgreSQL</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="img/pocket-membership-snapshot.png" className="card-img" alt="Pocket Membership" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Pocket Membership</h5>
                                            <p className="card-text">A web application to hold all your membership accounts on one platform.</p>
                                            <p className="card-text"><small className="text-muted">Technologies Used: Ruby on Rails, PostgreSQL</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Portfolio;