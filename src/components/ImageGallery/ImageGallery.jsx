import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types'; // ES6
import style from './image.module.css';
import Loader from '../ImageGallery/Loader';

const ImageGallery = ({ photos, onModal, Loading, modal }) => {


  return (
    <ul className={style.ImageGallery}>
 
      {photos.map(photo => (
        <ImageGalleryItem
          modal={modal}
          alt={photo.tag}
          id={photo.id}
          key={photo.id}
          webformatURL={photo.webformatURL}
          onModal={onModal}
          bigimg={photo.largeImageURL}
        >
        
        </ImageGalleryItem>
      ))}
 
      {Loading && <Loader Loading={Loading}></Loader>}

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
