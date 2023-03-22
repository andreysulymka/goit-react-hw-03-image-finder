import { Component } from "react";
import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar";
import { getPhotos } from "./services/getPhotos";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal/Modal"
import { Base, Container } from "./App.styled";
import Notiflix from 'notiflix';

export default class App extends Component {
  state = {
    searchText: '',
    isLoading: false,
    photos: [],
    page: 1,
   showModal: false,
    modalImgSrc: "",
  };

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
      .catch((error) => Notiflix.Notify.failure(error.message))
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
 
modalOpen = e => {
    if(e.target.nodeName === 'IMG') {
      this.setState({showModal: true, modalImgSrc: e.target.getAttribute("data-modal")})
    };
  };

  modalClose = () => {
    this.setState({showModal: false, modalImgSrc: ""});
  };


  render() {
    const { photos, isLoading,showModal, modalImgSrc, modalImgAlt } = this.state;
    return (
      <Base>
      <Container>
        <Searchbar onSearch={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {photos && (<ImageGallery photos={photos} modalOpen={this.modalOpen} onLoadMore={this.handleLoadMore}/>
        )}
        {showModal  && <Modal modalClose={this.modalClose} children={<img src={modalImgSrc} alt={modalImgAlt}/>}/>}
        </Container>
        </Base>
    );
  }
}