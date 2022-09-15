import style from './image.module.css'
import PropTypes from 'prop-types'; // ES6

const Button = ({ loadMOre }) => {
  return (
    <div className={style.Load_more}>
      <button type="button" className={style.Button} onClick={loadMOre}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMOre: PropTypes.func.isRequired,
};

export default Button;
