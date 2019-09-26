import React from 'react';
import Title from './Title.jsx';
import Header from './Header';
import Dashboard from './Dashboard.jsx';
import '../style.css';
import search from '../lib/searchYelp.js';
import Spinner from './Spinner.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      category: null,
      location: "austin",
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var key = e.target.name;
    var value = `foodtrucks ${e.target.value}`;
    this.setState({
      [key]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    //initiates spinner and clears dashboard
    this.setState({
      data: null,
      loading: true
    });

    //makes api call
    search(this.state.location, this.state.category)
    .then(response => {
      this.setState({
        data: response,
        loading: false
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
        {this.state.loading ? <Spinner/> : null}
        {this.state.data ? <Dashboard data={this.state.data}/> : null}
      </div>
    )
  }
}

export default App;