const API_KEY = "44094007-67477d06fc63ea0136e02e71a";
const BASE_URL = "https://pixabay.com/api/";

export function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(url).then(response => response.json());
}