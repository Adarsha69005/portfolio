import React, {Fragment} from 'react';

function WorkExperience() {
    return (
        <Fragment>
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
            <div className="w3-container">
                      <h5 className="w3-opacity"><b>Web Developer / HiUp Solutions</b></h5>
                      <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>July 2018 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                      <p>Developing Web Application using ReactJS / NodeJS.</p>
                      <hr />
                </div>
            
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Backend Developer / Jhilko Innovation Pvt.Ltd.</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2018 - June 2018</h6>
              <p>Developing Mobile Application Backend Services.(NodeJS)</p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Hardware and Network Technician / Primuson Pvt.Ltd.</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Feb 2017 - June 2017</h6>
              <ul>
                <li>Monitoring Hardware / Network Devices (Servers, Routers, PC's)</li>
                <li>Monitoring ISP's network</li>
                <li>Troubleshooting Hardware / Network Devices</li>
              </ul>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Internship / Microsoft Innovation Center Nepal</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Oct 2016 - Jan 2017</h6>
              <ul>
                <li>Developing Interactive Voice Response (IVR) for GOLDEN THOUSAND DAYS PROJECT</li>
                <li>Learning Software and Web development Technology.</li>
                <li>Learning Microsoft Software Services like (Azure,Windows Server,Office 365)</li>
              </ul>
              <hr />
            </div>
        </Fragment>
    );
}

export default WorkExperience;