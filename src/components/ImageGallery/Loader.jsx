import { Rings } from 'react-loader-spinner';
import PropTypes from 'prop-types'; // ES6
import style from './image.module.css';

const Loader = ({ Loading }) => {
  return (
    <div className={style.Loader}>
      {Loading && (
        <Rings color="#00BFFF" Loading={Loading} height={380} width={380} />
      )}
    </div>
  );
};

Loader.propTypes = {
  Loading: PropTypes.bool.isRequired,
};

export default Loader;
