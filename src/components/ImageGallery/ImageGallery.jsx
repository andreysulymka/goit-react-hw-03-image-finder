import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem";
import LoadMoreButton from "components/LoadMoreBtn/LoadMoreBtn";
import { List } from "./ImageGallery.styled";


const ImageGallery = ({ photos, onLoadMore, onPhotoClick  }) => {
  return (
    <List>
      <div >
        {photos.map((photo) => (
          <ImageGalleryItem key={photo.id} photo={photo}  onClick={() => onPhotoClick(photo.largeImageURL)}/>
        ))}
      </div>
      <div >
        <LoadMoreButton onClick={onLoadMore} />
      </div>
    </List>
  );
};

export default ImageGallery;