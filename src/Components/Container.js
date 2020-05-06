import React  from "react";
import Footer from "../Components/Footer";
import { Helmet } from 'react-helmet';

function Container(props) {
    return (
        <div className="w3-light-grey">
          <Helmet>
            <title>Adarsha Aryal Portfolio</title>
            <meta name="description" content="Adarsha Aryal Portfolio" />
          </Helmet>
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