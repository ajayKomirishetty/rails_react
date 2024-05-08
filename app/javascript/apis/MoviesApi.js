import axios from 'axios';

const BASE_API = 'http://localhost:3000'

// input: movieName => name of the movie
// output: [movies]|| [] => List of the movies that matches the search term
export const fetchMoviesByName = (movieName) => {
  return  axios.get(
    `${BASE_API}/movies?query=${movieName}`,
    { headers: { "Accept": "application/json"}
    })
}