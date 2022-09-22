import '../styles.css';
import PropTypes from 'prop-types'; // ES6
import style from './image.module.css';

const ImageGalleryItem = ({ webformatURL, id, onModal, bigimg }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        className={style.ImageGalleryItem_image}
        name={id}
        src={webformatURL}
        alt=''
        onClick={onModal}
        bigImg={bigimg}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
