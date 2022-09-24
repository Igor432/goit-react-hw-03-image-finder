import style from './ImageGallery/image.module.css';
import axios from 'axios';
import SearchBar from './ImageGallery/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './ImageGallery/Button';
import Notiflix from 'notiflix';

const { Component } = require('react');

class App extends Component {
  state = {
    isLoading: false,
    page: 1,
    photos: [],
    keyWord: '',
  };

  getPhoto = async (keyWord, page) => {
    this.setState({ isLoading: true });
    try {
      const photos = await axios.get(
        `https://pixabay.com/api/?q=${keyWord}&page=${page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=12`
      );

      if (photos.data.hits.length === 0) {
        Notiflix.Notify.failure('Qui timide rogat docet negare');
      }

      this.setState(prev => {
        return {
          photos: [...prev.photos, ...photos.data.hits],
          page: prev.page + 1,
        };
      });
    } catch {
      console.log('Error');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = e => {
    const keyWord = this.state.keyWord;
    this.setState({
      page: 1,
      photos: [],
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

  loadMore = () => {
    this.getPhoto(this.state.keyWord, this.state.page);
  };

  render() {
    const { photos } = this.state;
    const { modal } = this.state;
    const { isLoading } = this.state;

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

        {photos.length >= 12 && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}

export default App;
