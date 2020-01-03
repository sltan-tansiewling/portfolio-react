import React from 'react';

class About extends React.Component {
    render() {
        return(
            <div>
                <article id="about">
                    <div className="row mt-3 jumbotron">
                        {/* SECTION NAME */}
                        <div className="col col-4">
                            <div className="section-name-bg">
                                <h3>ABOUT</h3>
                            </div>
                        </div>
                        {/* SECTION CONTENT */}
                        <div className="col-6">
                            <p className="text-justify">Hi! I'm <strong>Siew Ling</strong>.</p>
                            <p className="mt-3 text-justify">As a software tester for the past 10 years, I specialized in exploratory testing and user acceptance testing. By working with developers and business teams to design test plans and test cases according to business requirements, I get an overview of how technology meets the different business operations needs.</p>

                            <p className="mt-3 text-justify">Inspired by the wonders of technology, I attended a 3 month bootcamp in Software Engineering to upgrade my technical skill set. In 3 months, I built a total of 4 projects!</p>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default About;