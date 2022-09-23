import '../styles.css';
import style from './image.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.props.quitModal();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.props.quitModal();
      }
    });
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
