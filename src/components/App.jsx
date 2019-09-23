import React from 'react';
import Title from './Title.jsx';
import Header from './Header';
import Canvas from './Canvas.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Title/>
        <Header/>
        <Canvas/>
      </div>
    )
  }
}

export default App;