

export const getPhotos = (searchText) => {
    return fetch(`https://pixabay.com/api/?key=33419599-8df6ee82ed12cd9ffb5884c17&q=${searchText}&image_type=photo&pretty=true`)
          
}

