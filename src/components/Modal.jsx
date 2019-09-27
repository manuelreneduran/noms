import React from 'react';
import Spinner from './Spinner.jsx';
import config from '../../config.js';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
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
        <iframe id="map-frame"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/search?key=${config.GOOGLE_MAPS_API_KEY}&q=${this.props.businessLatitude},${this.props.businessLongitude}`}
          allowFullScreen>
        </iframe>
        </section>
      </div>
    );
  }
};

export default Modal;