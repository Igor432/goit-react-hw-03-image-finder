import '../styles.css';
import style from './image.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

export class Modal extends Component {
  closeModal = e => {
    if (e.key === 'Escape') {
      this.props.quitModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  render() {
    return (
      <div className={style.Overlay} onClick={this.props.quitModal}>
        <div className={style.Modal}>
          <img
            width="1000px"
            height="auto"
            src={this.props.largePhoto}
            alt=""
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  quitModal: PropTypes.func.isRequired,
  largePhoto: PropTypes.string.isRequired,
};

export default Modal;
