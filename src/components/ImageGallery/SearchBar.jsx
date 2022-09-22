import '../styles.css';
import PropTypes from 'prop-types'; // ES6
import style from './image.module.css';

const SearchBar = ({ onSubmit, keyWord, onChange }) => {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={style.SearchForm_button}>
          <span className={style.SearchForm_button_label}></span>
        </button>

        <input
          className={style.SearchForm_input}
          type="text"
          name='search'
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={keyWord}
          onChange={onChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
