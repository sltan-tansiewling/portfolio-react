import React from 'react';

class About extends React.Component {

    render() {
        const heroImage = {
            "width": "100%",
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "cover",
            "position": "relative"
        };

        const heroText = {
            // "text-align": "center",
            "position": "absolute",
            "top": "40%",
            "left": "40%",
            "transform": "translate(-50%, -50%)",
            "color": "rgb(56, 67, 75)"
        };

        return(
            <div>
                <article id="about">
                    <div>
                        <img src="img/hero_image.jpg" style={heroImage}/>
                        <div style={heroText}>
                            <div>
                                <h1>TAN SIEW LING</h1>
                                <p><strong>Full Stack Developer | QA Automation Tester</strong></p>
                            </div>
                            <div>
                                <p>Full Stack Developer with 10 years of working experience as a Quality Assurance Specialist.</p>
                                <p>I take care of the software development life cycle from requirements gathering to providing post-launch support users. I plan, design and develop quality software applications to meet your business needs.</p>
                                <a href="/#portfolio">
                                    <button type="button" className="btn btn-outline-dark btnViewPortfolio">View Portfolio</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*<div className="row mt-3 jumbotron">
                        SECTION NAME
                        <div className="col col-4">
                            <div className="section-name-bg">
                                <h3>ABOUT</h3>
                            </div>
                        </div>
                        SECTION CONTENT
                        <div className="col-6">
                            <p className="text-justify">Hi! I'm <strong>Siew Ling</strong>.</p>
                            <p className="mt-3 text-justify">As a software tester for the past 10 years, I specialized in exploratory testing and user acceptance testing. By working with developers and business teams to design test plans and test cases according to business requirements, I get an overview of how technology meets the different business operations needs.</p>

                            <p className="mt-3 text-justify">Inspired by the wonders of technology, I attended a 3 month bootcamp in Software Engineering to upgrade my technical skill set. In 3 months, I built a total of 4 projects!</p>
                        </div>
                    </div>*/}
                </article>
            </div>
        );
    }
}

export default About;