import React from 'react';

class Footer extends React.Component {
    render() {

        let currentYear = new Date().getFullYear();


        return(
            <div>
                <footer>
                    <p className="text-center">
                        <small className="text-muted">Copyright &copy; {currentYear} Tan Siew Ling - All Rights Reserved.</small>
                    </p>
                </footer>
            </div>
        );
    }
}

export default Footer;