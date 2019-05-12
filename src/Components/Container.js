import React  from "react";
import Footer from "../Components/Footer";


function Container(props) {
    return (
        <div className="w3-light-grey">
        <div className="w3-content w3-margin-top" style={{maxWidth:"1400px"}}>
          <div className="w3-row-padding">
                {props.children}
          </div>
      </div>
      <Footer />
      </div>
    );
}

export default Container;