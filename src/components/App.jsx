import style from './ImageGallery/image.module.css';
import axios from 'axios';
import SearchBar from './ImageGallery/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './ImageGallery/Button';
import Modal from './ImageGallery/Modal';
import Loader from './ImageGallery/Loader';

const { Component } = require('react');

class App extends Component {
  state = {
    isLoading: false,
    modal: false,
    page: 1,
    photos: [],
    keyWord: '',
    total: 0,
    perPage: 12,
    largePhoto: {},
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.link !== this.state.link) {
      this.setState({ page: 1, perPage: 12 });
      this.getPhoto(this.state.keyWord);
    }
    if (prevState.perPage !== this.state.perPage) {
      this.getPhoto(this.state.keyWord);
    }

    document.addEventListener('keydown', this.quitModal);
  };

  getPhoto = async keyWord => {
    this.setState({ isLoading: true });
    const photos = await axios.get(
      `https://pixabay.com/api/?q=${keyWord}&page=${this.state.page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
    );
    this.setState({
      photos: photos.data.hits,
      total: photos.data.total,
      isLoading: false,
    });
  };

  onSubmit = e => {
    const keyWord = e.target.search.value;
    this.setState({
      keyWord: keyWord,
    });
    this.getPhoto(keyWord);
    e.preventDefault();
    e.target.reset();
  };

  loadMore = e => {
    e.preventDefault();

    this.setState(prev => {
      return {
        perPage: prev.perPage + 12,
      };
    });
  };

  onModal = e => {
    const target = e.target;
    this.setState({ modal: true });
    let bigPhoto = this.state.photos.filter(
      photo => photo.id === Math.floor(target.name)
    );
    this.setState({ largePhoto: bigPhoto });
  };

  quitModal = e => {
    if (e.key === 'Escape') {
      this.setState({ modal: false });
    }
  };

  render() {
    const { total } = this.state;
    const { modal } = this.state;
    const { isLoading } = this.state;

    return (
      <div className={style.main} >
        <SearchBar onSubmit={this.onSubmit} />
        {isLoading && <Loader Loading={isLoading} />}
        <ImageGallery photos={this.state.photos} onModal={this.onModal} />
        {total > 12 && <Button loadMOre={this.loadMore} />}
        {modal && (
          <Modal
            photos={this.state.photos}
            largePhoto={this.state.largePhoto}
          />
        )}
      </div>
    );
  }
}

export default App;
