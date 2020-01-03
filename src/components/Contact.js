import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div>
                <article id="contact">
                    <div className="row mt-3 jumbotron">
                        {/* SECTION NAME */}
                        <div className="col col-4">
                            <div className="section-name-bg">
                                <h3>CONTACT</h3>
                            </div>
                        </div>
                        {/* SECTION CONTENT */}
                        <div className="col-6">
                            <p className="text-justify">Looking for someone to help you with web development or software testing projects? <br/>Connect with me on the following platforms!</p>
                            <a href="https://github.com/tansiewling-hotmail" target="_blank"><img className="col-2" src="img/cat.png" alt="Github: tansiewling-hotmail" /></a>
                            <a href="mailto:sltan.tansiewling@gmail.com" target="_blank"><img className="col-2" src="img/email.png" alt="Email to: sltan.tansiewling@gmail.com" /></a>
                            <a href="https://www.linkedin.com/in/tansiewling/" target="_blank"><img className="col-2" src="img/linkedin.png" alt="LinkedIn: https://www.linkedin.com/in/tansiewling/" /></a>
                            <br /><br /><br />
                            <div>Credits:
                                <p>Icons made by <a href="https://www.flaticon.com/<?=_('authors/')?>dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                                <br />
                                Icons made by <a href="https://www.flaticon.com/<?=_('authors/')?>freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Contact;