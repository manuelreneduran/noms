import React from 'react';
import Item from './Item.jsx';
import Modal from './Modal.jsx';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      activeBusiness: null
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  setActiveBusiness = (name) => {
    this.setState({
      activeBusiness: name
    }, () => {
      this.showModal();
    })
  }

  render() {
    var items = this.props.data.map(ele => {
      return <Item setActiveBusiness={this.setActiveBusiness} key={ele.id} business={ele}/>
    })
    return (
      <div id="canvas-wrapper">
        {items}
        {this.state.show ? <Modal activeBusiness={this.state.activeBusiness} show={this.state.show} handleClose={this.hideModal}/> : null}
      </div>
    )
  }
}

export default Dashboard;