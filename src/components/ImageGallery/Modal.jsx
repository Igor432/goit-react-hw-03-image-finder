import '../styles.css';
import PropTypes from 'prop-types'; // ES6
import style from './image.module.css';

const Modal = ({ largePhoto, quitModal }) => {
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      quitModal()
    }
  });
  console.log(largePhoto)
  
  return (
    <div className={style.Overlay} onClick={quitModal}>
      <div className={style.Modal}>
        <img
          width="1000px"
          height="auto"
          src={largePhoto}
          alt={largePhoto}
         
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largePhoto: PropTypes.object.isRequired,
};

export default Modal;
