import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.innerDiv = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (e) => {
    if (this.innerDiv.current.contains(e.target)) {
      return;
    }
    this.props.handleClose();
  }



  render() {
    var showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section ref={this.innerDiv} className="modal-main">
            <p>Modal</p>
            <p>Data</p>
          <button onClick={this.props.handleClose}>close</button>
        </section>
      </div>
    );
  }
};

export default Modal;