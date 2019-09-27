import React from 'react';
import Item from './Item.jsx';
import Modal from './Modal.jsx';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      activeBusiness: null,
      businessLatitude: null,
      businessLongitude: null
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  setActiveBusiness = (name, lat, long) => {
    this.setState({
      activeBusiness: name,
      businessLatitude: lat,
      businessLongitude: long
    }, () => {
      this.showModal();
    })
  }

  render() {
    var items = this.props.data.map(ele => {
      return <Item setActiveBusiness={this.setActiveBusiness} key={ele.id} business={ele}/>
    })
    return (
      <>
      <hr/>
      <div id="canvas-wrapper">

        {items}
        {this.state.show ? <Modal activeBusiness={this.state.activeBusiness} businessLatitude={this.state.businessLatitude}
        businessLongitude={this.state.businessLongitude} show={this.state.show} handleClose={this.hideModal}/> : null}
      </div>
      </>
    )
  }
}

export default Dashboard;