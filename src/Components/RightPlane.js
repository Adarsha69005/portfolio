import React from 'react';
import WorkExperience from './WorkExperience';
import Education from './Education';

function RightPlane() {
    return (
        <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">    
                <WorkExperience />
            </div>
            <Education />
        </div>

    );

}

export default RightPlane;