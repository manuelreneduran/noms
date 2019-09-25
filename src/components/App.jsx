import React from 'react';
import Title from './Title.jsx';
import Header from './Header';
import Canvas from './Canvas.jsx';
import data from '../../exampleData.js';
import '../style.css';
import search from '../lib/searchYelp.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      category: null,
      location: "austin"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    search(this.state.location, this.state.category)
    .then(response => {
      this.setState({
        data: response
      })
    })
    .catch((err) => {
    console.log ('error')
    })
  }



  handleChange(e) {
    var key = e.target.name;
    console.log(key);
    var value = `foodtruck, ${e.target.value}`;
    this.setState({
      [key]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    search(this.state.location, this.state.category)
    .then(response => {
      this.setState({
        data: response
      })
    })
    .catch(err => {
      console.log("error on submit: " + err)
    })
  }

  render() {
    return (
      <div id="page-wrapper">
        <Title/>
        <Header handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        {this.state.data ? <Canvas data={this.state.data}/> : null}
      </div>
    )
  }
}

export default App;