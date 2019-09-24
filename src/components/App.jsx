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
      category: "food truck",
      location: "austin"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.state.location}`, {
      headers: {
        Authorization: `Bearer ${config.YELP_API_KEY}`
    },
      params: {
      term: `food truck pizza`,
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
    var value = e.target.value;
    this.setState({[key]: value});
  }

  render() {
    return (
      <div id="page-wrapper">
        <Title/>
        <Header handleChange={this.handleChange}/>
        {this.state.data ? <Canvas data={this.state.data}/> : null}
      </div>
    )
  }
}

export default App;