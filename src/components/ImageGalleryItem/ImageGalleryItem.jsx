import React from "react";

const ImageGalleryItem = ({link, altTitle, largeImage}) =>{
  return <li >
      <a href={largeImage}>
      <img src={link} alt={altTitle} />
      </a>
</li>
}

export default ImageGalleryItem;