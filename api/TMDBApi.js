// API/TMBDApi.js

const API_TOKEN = "5ffb1377d2f18d98012e74c115e9b79b"

export function getFilmsFromApiWithSearchedText(text, page) {
    
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}