
const BASE_URL = 'https://pixabay.com/api'
const API_KEY = '33419599-8df6ee82ed12cd9ffb5884c17'

export const getPhotos = (searchText) => {
    fetch(`${BASE_URL}{API_KEY}`)
}

// https://pixabay.com/api/?key=33419599-8df6ee82ed12cd9ffb5884c17&q=yellow+flowers&image_type=photo&pretty=true