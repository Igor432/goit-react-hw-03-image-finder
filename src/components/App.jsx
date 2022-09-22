import style from './ImageGallery/image.module.css';
import axios from 'axios';
import SearchBar from './ImageGallery/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './ImageGallery/Button';
import Modal from './ImageGallery/Modal';

const { Component } = require('react');

class App extends Component {
  state = {
    isLoading: false,
    page: 1,
    photos: [],
    keyWord: '',
    modal: false,
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

  onModal = e => {
    const bigImg = e.target.getAttribute('bigImg');
    this.setState({
      /*
      largePhoto: this.state.photos.filter(
        photo => photo.id === Math.floor(e.target.name)
      ),
      */
      largePhoto: bigImg,
      modal: true,
    });
  };

  quitModal = e => {
    this.setState({
      modal: false,
    });
   
    
  };

  loadMore = e => {
    e.preventDefault();
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
        <SearchBar onSubmit={this.onSubmit} />

        <ImageGallery
          photos={photos}
          onModal={this.onModal}
          Loading={isLoading}
        />

        {total >= page && <Button loadMore={this.loadMore} />}
        {modal && (
          <Modal
            largePhoto={this.state.largePhoto}
            quitModal={this.quitModal}
          />
        )}
      </div>
    );
  }
}

export default App;
