import '../styles.css'
import PropTypes from 'prop-types'; // ES6


const ImageGalleryItem = ({ webformatURL, largeImageURL, id, onModal}) => {

return (

    <li class="ImageGalleryItem">
  <img class='ImageGalleryItem-image' name={id}  src={webformatURL} alt="" onClick={onModal}/>
</li>
)
    
}


ImageGalleryItem.propTypes = {

  onModal: PropTypes.func
}


export default ImageGalleryItem