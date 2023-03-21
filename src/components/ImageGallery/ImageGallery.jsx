import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem";
import LoadMoreButton from "components/LoadMoreBtn/LoadMoreBtn";
import { List } from "./ImageGallery.styled";


const ImageGallery = ({ photos, onLoadMore, onPhotoClick  }) => {
  return (
    <div>
      <List >
        {photos.map((photo) => (
          <ImageGalleryItem key={photo.id} photo={photo}  onPhotoClick={onPhotoClick}/>
        ))}
      </List>
      <div >
        <LoadMoreButton onClick={onLoadMore} />
      </div>
    </div>
  );
};

export default ImageGallery;