import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem";


const ImageGallery = ({photos}) => {
    return (
        <ul >
            {photos.map(photo =>
                {
                    return (
                        <ImageGalleryItem key={photo.id}
                link={photo.webformatURL}
                largeImage={photo.largeImageURL}
                altTitle={photo.tags} />
                    );
                })}   
        </ul>
    );
};

export default ImageGallery;