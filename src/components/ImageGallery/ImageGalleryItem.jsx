import '../styles.css';
import PropTypes from 'prop-types'; // ES6
import style from './image.module.css';
import Modal from './Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };

  quitModal = e => {
    this.setState({
      modal: false,
    });
  };

  large = '';

  openModal = e => {
    this.setState({
      modal: true,
    });
    this.large = e.target.getAttribute('bigimg');
  };

  render() {
    if (this.state.modal) {
      return (
        <div>
          <Modal largePhoto={this.large} quitModal={this.quitModal}></Modal>
        </div>
      );
    }

    return (
      <div>
        <li className={style.ImageGalleryItem}>
          <img
            className={style.ImageGalleryItem_image}
            name={this.props.id}
            src={this.props.webformatURL}
            alt=""
            onClick={this.openModal}
            bigimg={this.props.bigimg}
          />
        </li>
      </div>
    );
  }
}

ImageGalleryItem.propTypes = {
  onModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
