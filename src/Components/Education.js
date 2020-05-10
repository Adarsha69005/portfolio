import React from 'react';

function Education() {
    return (
        <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Torrens University</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2019 AD - <span className="w3-tag w3-teal w3-round">Current</span></h6>
          <p>Masters in Business Information System</p>
          <hr />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Kathmandu Engineering College (affiliated to Tribhuvan University)</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2012 AD - 2017 AD</h6>
          <p>Bachelor in Electronic and Communication</p>
          <hr />
        </div>
      </div>
    );
}

export default Education;