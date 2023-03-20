import React from "react";

// const ImageGalleryItem = ({link, altTitle, largeImage}) =>{
//   return <li >
//       <a href={largeImage}>
//       <img src={link} alt={altTitle} />
//       </a>
// </li>
// }

const ImageGalleryItem = ({ photo, onPhotoClick }) => {
  return (
    <li>
      <a href={photo.largeImageURL}>
        <img src={photo.webformatURL} alt={photo.tags} onClick={() => onPhotoClick(photo)}/>
      </a>
    </li>
  );
};

export default ImageGalleryItem;

