import React from 'react';
import Title from './Title.jsx';
import Header from './Header';
import Canvas from './Canvas.jsx';
import data from '../../exampleData.js';
import '../style.css';
import config from '../../config.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      category: "bbq",
      location: "austin"
    };
  }

  componentDidMount() {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.state.location}`, {
      headers: {
        Authorization: `Bearer ${config.YELP_API_KEY}`
    },
      params: {
      term: `${this.state.category}`,
    }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
    console.log ('error')
    })
  }

  render() {
    return (
      <div id="page-wrapper">
        <Title/>
        <Header/>
        <Canvas data={this.state.data}/>
      </div>
    )
  }
}

export default App;