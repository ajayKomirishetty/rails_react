import React, { useState } from "react"; // Make sure to import useState
import { fetchMoviesByName } from '../apis/MoviesApi'

const MoviesDb = (  props ) => {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(props.movies?.results);
// debugger
  const searchMovies = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchMoviesByName(query)
      setMovies(response.data.results);

    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesDb;
