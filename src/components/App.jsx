import { Component } from "react";
import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar";
import { ToastContainer, toast} from 'react-toastify';
import { getPhotos } from "./services/getPhotos";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal"


export default class App extends Component {
  state = {
    searchText: '',
    isLoading: false,
    photos: null,
    page: 1,
    showModal: false,
  modalSrc: null,
  };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = e => {
        if (e.code === "Escape") {
            this.setState({ isHidden:false})
        }
            
    }
    componentWillUnmount =()=> {
        window.removeEventListener("keydown", this.handleKeyDown)
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.setState({ isLoading: true, photos: null, page: 1 }, () => {
        this.loadPhotos();
      });
    }
  }

  loadPhotos = () => {
    const { searchText, page } = this.state;
    getPhotos(searchText, page)
      .then((res) => res.json())
      .then((photos) => {
        this.setState((prevState) => ({
          photos: prevState.photos ? [...prevState.photos, ...photos.hits] : photos.hits,
        }));
      })
      .catch((error) => toast.error(error.message))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleFormSubmit = (inputSearch) => {
    this.setState({ searchText: inputSearch });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), () => {
      this.loadPhotos();
    });
  };
  handleCloseModal = () => {
  this.setState({ showModal: false });
  };
  handlePhotoClick = (url) => {
  this.setState({ showModal: true, modalSrc: url });
};

  render() {
    const { photos, isLoading} = this.state;
    return (
      <>
        <Searchbar onSearch={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {photos && <ImageGallery photos={photos} onLoadMore={this.handleLoadMore} onPhotoClick={this.handlePhotoClick}/>}
        <ToastContainer />
         {this.state.showModal && (
  <Modal largeImage={this.state.modalSrc} onClose={this.handleCloseModal} />
)}
      </>
    );
  }
}