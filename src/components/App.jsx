import './styles.css'
import axios from 'axios'
import SearchBar from './ImageGallery/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './ImageGallery/Button'
import Modal from './ImageGallery/Modal'
import Loader from './ImageGallery/Loader'
import PropTypes from 'prop-types'; // ES6


const { Component } = require("react")

class App extends Component  {


state = {
  isLoading: false,
  link: '',
  page: 1,
  photos: [],
  total: 0,
  key: '',
perPage: 12,
modal: false,
largePhoto: {}
}


componentDidUpdate = (prevProps, prevState) => {

  console.log(this.state.photos) 
const currentKey = this.state.key
console.log( currentKey)
if (prevState.key !== this.state.key) {

  this.setState({page: 1, perPage: 12})
}

if (prevState.link !== this.state.link) {
this.getPhoto()

} else if (prevState.perPage !== this.state.perPage) {
  this.setState({ link: `https://pixabay.com/api/?q=${this.state.key}&page=${this.state.page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`})

  } 


document.addEventListener('keydown', this.quitModal)


}







getPhoto = async () => {
  this.setState({isLoading: true})
  const photos = await axios.get(this.state.link)
  this.setState({photos: photos.data.hits, total: photos.data.total, id:photos.data.id, isLoading: false})
}



 onSubmit = (e) => {
const {page} = this.state
const {perPage} = this.state
const keyWord = e.target.search.value
this.setState({key: keyWord})
 this.setState({key: keyWord, link: `https://pixabay.com/api/?q=${keyWord}&page=${page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=${perPage}`})
 e.preventDefault()
 e.target.reset()



  }

 

loadMore = (e) => {

e.preventDefault()

  this.setState(prevState => {
    return {
      
      perPage: prevState.perPage + 12,
      
    }
  })
console.log(this.state.page)

}



onModal = (e) => {
  const target = e.target
  this.setState({modal: true})
let bigPhoto = this.state.photos.filter((photo) => photo.id === Math.floor(target.name))
this.setState({largePhoto: bigPhoto})
  }

  quitModal = (e) => {
if (e.key === "Escape") {
    this.setState({modal: false})
}
    
  }






render () {

 const {total} = this.state
 const {modal} = this.state
const {isLoading} = this.state

  return (
    <div 
    class='App'
      style={{
        height: '100vh',
        display: 'flex',      
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'
      }}
    >
      <SearchBar  onSubmit={this.onSubmit}/>
   {isLoading && <Loader Loading={isLoading}/>}
      <ImageGallery photos={this.state.photos} onModal={this.onModal}/>
      {total > 12 && <Button loadMOre={this.loadMore}/>}
     {modal && <Modal photos={this.state.photos} largePhoto={this.state.largePhoto} />}
    </div>
  )

    }
  }



  App.propTypes = {
    isLoading: PropTypes.bool,
    link: PropTypes.string,
    page: PropTypes.number,
    photos: PropTypes.array,
    total: PropTypes.number,
    key: PropTypes.string,
  perPage: PropTypes.number,
  modal: PropTypes.bool,
  largePhoto: PropTypes.object
  }

  export default App