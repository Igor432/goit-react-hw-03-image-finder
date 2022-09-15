import '../styles.css';
import PropTypes from 'prop-types'; // ES6
import style from './image.module.css'


const Modal = ({ largePhoto }) => {
  return (
    <div className={style.Overlay}>
      <div className={style.Modal}>
        <img
          src={largePhoto[0].largeImageURL}
          alt={largePhoto[0].tags}
          id={largePhoto[0].id}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largePhoto: PropTypes.string.isRequired,
};

export default Modal;
