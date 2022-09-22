import style from './image.module.css';
import PropTypes from 'prop-types'; // ES6

const Button = ({ loadMore }) => {
  return (
    <div className={style.Load_more}>
      <button type="button" className={style.Button} onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMOre: PropTypes.func,
};

export default Button;
