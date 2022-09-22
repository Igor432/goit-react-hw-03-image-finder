import style from './ImageGallery/image.module.css';
import axios from 'axios';
import SearchBar from './ImageGallery/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './ImageGallery/Button';

const { Component } = require('react');

class App extends Component {
  state = {
    isLoading: false,
    page: 1,
    photos: [],
    keyWord: '',
    largePhoto: {},
  };

  getPhoto = async (keyWord, page) => {
    this.setState({ isLoading: true });
    const photos = await axios.get(
      `https://pixabay.com/api/?q=${keyWord}&page=${page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=12`
    );

    this.setState(prev => {
      return {
        total: photos.data.total / 12,
        photos: [...prev.photos, ...photos.data.hits],
        isLoading: false,
        page: prev.page + 1,
      };
    });
  };

  onSubmit = e => {
    const keyWord = e.target.search.value;
    this.setState({
      page: 1,
      photos: [],
      keyWord: keyWord,
    });

    e.preventDefault();
    e.target.reset();
    this.getPhoto(keyWord, 1);
  };

  onChange = e => {
    this.setState({
      keyWord: e.target.value,
    });
  };

  loadMore = e => {
    this.getPhoto(this.state.keyWord, this.state.page);
  };

  render() {
    const { total } = this.state;
    const { photos } = this.state;
    const { modal } = this.state;
    const { isLoading } = this.state;
    const { page } = this.state;

    return (
      <div className={style.main}>
        <SearchBar
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          keyWord={this.state.keyWord}
        />

        <ImageGallery
          modal={modal}
          photos={photos}
          onModal={this.onModal}
          Loading={isLoading}
        />

        {total >= page && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}

export default App;
