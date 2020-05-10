import React from 'react';
import SelfImage from './Image';

function LeftPlane() {
    return (
        <div className="w3-third">

            <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              
              <SelfImage />
              <div className="w3-display-bottomleft w3-container w3-text-black">
                <h2 style={{color:"white"}}>Adarsha Aryal</h2>
              </div>
            </div>
        <div className="w3-container">
          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Web / Software Developer</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Sydney,Australia</p>
          <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>adarsha69005@gmail.com</p>
          <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+610416195027</p>
          <hr />

          <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
          <h5 className="left-plane">Programming Languages</h5>
          <h6 className="left-plane">JavaScript</h6>
          <ul className="left-plane">
              <li className="chip">MERN/PERN STACK</li>
              <li className="chip">NodeJS</li>
              <li className="chip">ReactJS</li>
              <li className="chip">Express</li>
              <li className="chip" >TypeScript</li>
          </ul>
          <h6 className="left-plane">Python</h6>
          <hr className="left-plane" />
          <h5 className="left-plane">Databases</h5>
          <ul className="left-plane">
              <li className="chip">Postgres SQL</li>
              <li className="chip">Mongo DB</li>
          </ul>
          <hr className="left-plane" />
          <h5 className="left-plane">Others</h5>
          <ul className="left-plane">
              <li className="chip">Amazon Web Services</li>
              <li className="chip">HTML / HTML5</li>
              <li className="chip">CSS</li>
          </ul>
          
          <br />

          <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
          <h4 className="left-plane chip">Nepali</h4>
          <h4 className="left-plane chip">English</h4>
          
          <br />
        </div>
      </div><br />

        </div>
    );
}

export default LeftPlane;