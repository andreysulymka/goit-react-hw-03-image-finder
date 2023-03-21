import React from "react";
import { Image, Item } from "./ImageGalleryItem.styled";

// const ImageGalleryItem = ({link, altTitle, largeImage}) =>{
//   return <li >
//       <a href={largeImage}>
//       <img src={link} alt={altTitle} />
//       </a>
// </li>
// }

const ImageGalleryItem = ({ photo, onPhotoClick }) => {
  return (
    <Item>
      
        <Image src={photo.webformatURL} alt={photo.tags} lowrc={photo.largeImage} onClick={() => onPhotoClick(photo.largeURL)}/>
      
    </Item>
  );
};

export default ImageGalleryItem;

