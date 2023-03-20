import { Component } from "react";
import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar";
import { ToastContainer, toast} from 'react-toastify';
import { getPhotos } from "./services/getPhotos";
import ImageGallery from "./ImageGallery";

export default class App extends Component {
  state = {
    searchText: '',
    isLoading: false,
    photos: null,
  };
  
  componentDidUpdate(prevState, prevProps) {
   if (prevState.searchText !== this.state.searchText) {
     this.setState({ isLoading: true });
     getPhotos(this.state.searchText)
       .then((res) => res.json())
       .then((photos) => this.setState({ photos: photos.hits }))
     .catch((error)=>toast.error(error.message))
       .finally(this.setState(()=>({ isLoading: false })));

    }
  }
  handleFormSubmit = (inputSearch) => {
    this.setState({searchText: inputSearch})
  }

  render() {
    const{photos, isLoading} = this.state
    return (<>
      <Searchbar onSearch={this.handleFormSubmit} />
      {isLoading && <Loader isVisidle={isLoading} />}
      {photos && <ImageGallery photos={photos} />}
      <ToastContainer/>
    </>)
  }
}
