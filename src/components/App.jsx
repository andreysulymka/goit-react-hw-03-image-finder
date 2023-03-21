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
    photos: null,
    page: 1,
    isHidden: false,
        modalSrc:null,
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
 
  handleOverlay = ({target}) => {
        if(target.tagName !=="IMG") this.setState({isHidden:false})
    }
  // handleImage = ({ target }) => {
  //     console.log(target);
  //       if(target.tagName === "IMG") 
  //       {this.setState({
  //           isHidden: true,
  //           modalSrc:target.lowsrc,
  //       })
  //       } else {
  //           this.setState({
  //           isHidden: false,
  //       })
  //       }
  //   }
  
handleImage = (event) => {
  const { tagName, lowsrc } = event.target;
  if (tagName === "IMG" && lowsrc) {
    this.setState({
      isHidden: true,
      modalSrc: lowsrc
    });
  } else {
    this.setState({
      isHidden: false,
      modalSrc: null
    });
  }
};

  render() {
    const { photos, isLoading, isHidden} = this.state;
    return (
      <Base>
      <Container>
        <Searchbar onSearch={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {photos && <ImageGallery photos={photos} onLoadMore={this.handleLoadMore} onPhotoClick={this.handleImage}/>}
        {isHidden && <Modal
                overlayClick={this.handleOverlay}
                largeImage={this.state.modalSrc} />}
        </Container>
        </Base>
    );
  }
}