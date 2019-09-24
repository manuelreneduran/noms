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
      data: null,
      category: null,
      location: "austin"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getData()
    .then(response => {
      this.setState({
        data: response
      })
    })
    .catch((err) => {
    console.log ('error')
    })
  }

  getData() {
    return axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.state.location}`, {
      headers: {
        Authorization: `Bearer ${config.YELP_API_KEY}`
    },
      params: {
      term: `${this.state.category}`,
      limi: 50
    }
    })
    .then((response) => {
      //filter out non-food-trucks
      var data = response.data.businesses.filter(ele => {
        var isTruck = false;
        for (var i = 0; i < ele.categories.length; i++) {
          if (ele.categories[i].alias === "foodtrucks") {
            isTruck = true;
          }
        }
        return isTruck ? true : false;
      })
      console.log(data);
      return data;
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
    this.getData()
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