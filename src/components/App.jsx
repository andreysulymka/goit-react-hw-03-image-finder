import { Component } from "react";
import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar";
import { ToastContainer} from 'react-toastify';
import ImageGallery from "./ImageGallery";

export default class App extends Component {
  state = {
    searchText: '',
    isLoading: false,
  };
  
  // componentDidUpdate(prevProps) {
  //   this.setState({isLoading: true})
  //   if (prevProps.searchText !== this.props.searchText) {
      // fetch()

    // finally{this.setState({isLoading: false})}
  //   }
  // }
  handleFormSubmit = (inputSearch) => {
    this.setState({searchText: inputSearch})
  }

  render() {
    return (<>
      <Searchbar onSearch={this.handleFormSubmit} />
      <Loader isVisidle={this.state.isLoading} />
      <ImageGallery searchText={this.state.searchText} />
      <ToastContainer/>
    </>)
  }
}
