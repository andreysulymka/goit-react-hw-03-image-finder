import { Component } from "react";

export default class ImageGallery extends Component {
  
    componentDidUpdate(prevProps) {
    if(prevProps.imageGallery !== this.props.imageGallery){}
}

  render() {
    return (<>
        <ul><li>{this.props.imageGallery}</li></ul>
    </>)
  }
}