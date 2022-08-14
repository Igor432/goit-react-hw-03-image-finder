import '../styles.css'
import PropTypes from 'prop-types'; // ES6



const Modal = ({largePhoto, quitModal}) => {


return (

<div class="Overlay" >
  <div class="Modal" >
   
    <img src={largePhoto[0].largeImageURL} alt={largePhoto[0].tags}  id={largePhoto[0].id} />
  </div>
</div>

)
}


Modal.propTypes = {

  quitModal: PropTypes.func
}


export default Modal