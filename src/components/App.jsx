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
    page: 1,
    photos: [],
    keyWord: '',
    perPage: 12,
    modal: false,
  };

  bigPhoto = {};

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.keyWord !== this.state.keyWord) {
      this.setState({
        page: 1,
        perPage: 12,
      });
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
      photos: photos.data,
      isLoading: false,
    });
    console.log(this.state.photos.hits);
  };

  onSubmit = e => {
    const keyWord = e.target.search.value;
    this.setState({
      keyWord: keyWord,
    });

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
    this.bigPhoto = this.state.photos.hits.filter(
      photo => photo.id === Math.floor(target.name)
    );
  };

  quitModal = e => {
    if (e.key === 'Escape') {
      this.setState({ modal: false });
    }
  };

  render() {
    const { perPage } = this.state;
    const { photos } = this.state;
    const { modal } = this.state;
    const { isLoading } = this.state;

    return (
      <div className={style.main} style={{}}>
        <SearchBar onSubmit={this.onSubmit} />
        {isLoading && <Loader Loading={isLoading} />}
        {photos.total > 0 && (
          <ImageGallery photos={photos.hits} onModal={this.onModal} />
        )}
        {photos.total > perPage && <Button loadMOre={this.loadMore} />}
        {modal && <Modal largePhoto={this.bigPhoto[0]} />}
      </div>
    );
  }
}

export default App;
