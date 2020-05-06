import React from 'react';

function Footer() {
    return (
        <footer className="w3-container w3-teal w3-center w3-margin-top">
            <p>Find me on social media.</p>
            <a href="https://www.facebook.com/adarsh.aryal.5" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-official fa-3x w3-hover-opacity" style={{marginLeft:"20px"}}></i></a>
            {/* <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i> */}
            <a href="https://www.linkedin.com/in/adarsha69005/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-3x w3-hover-opacity" style={{marginLeft:"20px"}}></i></a>
            <a href="https://github.com/Adarsha69005" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-3x w3-hover-opacity" style={{marginLeft:"20px"}}></i></a>
        </footer>
    );
}

export default Footer;