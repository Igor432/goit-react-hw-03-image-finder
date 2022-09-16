import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types'; // ES6
import style from './image.module.css';

const ImageGallery = ({ photos, onModal }) => {
  return (
    <ul className={style.ImageGallery}>
      {photos.map(photo => (
        <ImageGalleryItem
          id={photo.id}
          key={photo.id}
          webformatURL={photo.webformatURL}
          largeImageURL={photo.largeImageURL}
          onModal={onModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onModal: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
