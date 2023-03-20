import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem";
import LoadMoreButton from "components/LoadMoreBtn/LoadMoreBtn";


const ImageGallery = ({ photos, onLoadMore, onPhotoClick  }) => {
  return (
    <div>
      <div >
        {photos.map((photo) => (
          <ImageGalleryItem key={photo.id} photo={photo}  onClick={() => onPhotoClick(photo.largeImageURL)}/>
        ))}
      </div>
      <div >
        <LoadMoreButton onClick={onLoadMore} />
      </div>
    </div>
  );
};

export default ImageGallery;