import React from 'react';
import Item from './Item.jsx';
import Modal from './Modal.jsx';


class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  setSelectedBusiness = () => {

  }

  render() {
    var items = this.props.data.map(ele => {
      return <Item key={ele.id} business={ele}/>
    })
    return (
      <div id="canvas-wrapper">
      {items}
      <Modal show={this.state.show} handleClose={this.hideModal}/>
      <button type="button" onClick={this.showModal}>
          open
      </button>
    </div>
    )
  }
}

export default Canvas;