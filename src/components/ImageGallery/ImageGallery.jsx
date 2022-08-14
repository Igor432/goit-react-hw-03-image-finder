import ImageGalleryItem from "./ImageGalleryItem"
import PropTypes from 'prop-types'; // ES6


const ImageGallery = ({photos, onModal}) => {

    return (
        <ul class="ImageGallery">

{photos.map(photo =>
    <ImageGalleryItem id={photo.id} key={photo.id} webformatURL={photo.webformatURL} largeImageURL={photo.largeImageURL} onModal={onModal}/>
)}



</ul>
    )
}


ImageGallery.propTypes = {

    onModal: PropTypes.func
}

export default ImageGallery