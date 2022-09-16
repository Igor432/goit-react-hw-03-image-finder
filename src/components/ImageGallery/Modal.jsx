import '../styles.css';
import PropTypes from 'prop-types'; // ES6
import style from './image.module.css';

const Modal = ( {largePhoto} ) => {
  
  return (
    <div className={style.Overlay}>
      <div className={style.Modal}>
        <img
          src={largePhoto.largeImageURL}
          alt={largePhoto.tags}
          id={largePhoto.id}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largePhoto: PropTypes.array.isRequired,
};

export default Modal;
