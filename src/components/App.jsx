import React from 'react';
import Title from './Title.jsx';
import Header from './Header';
import Canvas from './Canvas.jsx';
import '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="page-wrapper">
        <Title/>
        <Header/>
        <Canvas/>
      </div>
    )
  }
}

export default App;