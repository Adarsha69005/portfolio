import React, {Component} from 'react';
import Container from './Components/Container';
import LeftPlane from './Components/LeftPlane';
import RightPlane from './Components/RightPlane';

class  App extends Component {
  render () {
    return (
      <Container >
        <LeftPlane />
        <RightPlane />
      </Container >
    );
  }
}

export default App;
